import { DndProvider, useDrop, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import {
	Link,
	Outlet,
	useActionData,
	useFetcher,
	useLoaderData
} from '@remix-run/react'
import { useRef, useEffect } from 'react'
import {
	addTodo,
	getTodosByDate,
	deleteTodo,
	updateTodo,
	moveToToday,
	moveToDate
} from '../db/index.server'
import { requireUserEmail, getUser } from '../db/session.server'
import { TodoItem } from '../components/Todo'
import { rating, dateProvider } from '../utils'
import { DeleteButton } from '../components/icons'

const ItemTypes = {
	TODO_ITEM: 'todo'
}

export interface DateProps {
	day: number
	month: number
	year: number
}

export interface TodoItemProps {
	today: boolean
	current: DateProps
	todo: Todo
}

interface DropResult {
	id: string
}

export interface Todo {
	text: string
	status: string
	id: any
	user: string
	month: number
	year: number
	day: number
	email: string
	notes: string
}

export interface PostTodo {
	text?: string
	status?: string
	id?: any
	user?: string
	email: string
}

export interface Errors {
	text?: string
}

export interface TodoObj {
	completed: number
	outstanding: number
}

export interface Day {
	todos: TodoObj
	date: number
}

export interface DateProps {
	day: number
	month: number
	year: number
}

export interface MoveTodoProps {
	id: string
	year: number
	month: number
	day: number
	user: string
}

export const action: ActionFunction = async ({ request }) => {
	const user = await requireUserEmail(request)
	const formData = await request.formData()
	const { _action, ...values } = Object.fromEntries(formData)

	// error handling
	const errors: Errors = {}
	if (_action === 'add') {
		if (!formData.get('text')) {
			errors.text = 'Please provide text!'
		}
		if (Object.keys(errors).length > 0) {
			return json(errors, { status: 422 })
		}
		return await addTodo({ ...values, user })
	}

	// form actions

	if (_action === 'edit') {
		return await updateTodo({ ...values, user })
	}

	if (_action === 'delete') {
		const id = formData.get('id')
		return await deleteTodo(id as any, user)
	}

	if (_action === 'changeStatus') {
		const oldStatus = formData.get('status')
		const status = oldStatus === 'OUTSTANDING' ? 'COMPLETED' : 'OUTSTANDING'
		return await updateTodo({ ...values, status, user })
	}

	if (_action === 'moveToToday') {
		return await moveToToday({ ...values, user })
	}

	if (_action === 'droppedOnDate') {
		const formData = await request.formData()
		const id = formData.get('id')
		const year = formData.get('year')
		const month = formData.get('month')
		const day = formData.get('day')
		//json({ message: `You dropped ${formData.get('id')}` })
		return await moveToDate({ id, year, month, day, user })
	} else {
		return null
	}
}

export const loader: LoaderFunction = async ({ request, params }) => {
	const user = await getUser(request)
	let url = new URL(request.url)
	const now = new Date()
	const today = {} as DateProps
	today.day = now.getDate()
	today.month = now.getMonth() + 1
	today.year = now.getFullYear()

	if (!url.searchParams.get('year') && !params.id) {
		return redirect(
			`/todos/calendar?year=${today.year}&month=${today.month}&day=${today.day}`
		)
	}

	let urlParams = url.searchParams

	let { yesterday, current, tomorrow, longMonth } = dateProvider(
		parseInt(urlParams.get('year') as any),
		parseInt(urlParams.get('month') as any),
		parseInt(urlParams.get('day') as any)
	)

	const todosForDay: Todo[] = await getTodosByDate(
		user.email,
		current.year,
		current.month,
		current.day
	)

	const completed = todosForDay.filter((i: Todo) => i.status === 'COMPLETED')
	const percentage = Math.floor((completed.length / todosForDay.length) * 100)

	return {
		todosForDay,
		current,
		yesterday,
		tomorrow,
		longMonth,
		today,
		user,
		percentage
	}
}

export default function Todos() {
	const {
		todosForDay,
		current,
		percentage,
		yesterday,
		tomorrow,
		longMonth,
		today
	} = useLoaderData()
	const fetcher = useFetcher()
	const errors = useActionData()

	const isAdding =
		fetcher?.state === 'submitting' &&
		fetcher.submission?.formData.get('_action') === 'add'
	const formRef = useRef()

	useEffect(() => {
		if (!isAdding) {
			formRef.current?.reset()
		}
	}, [isAdding])

	return (
		<DndProvider backend={HTML5Backend}>
			<div className='bg-pink-200 flex flex-wrap'>
				<div className='flex-grow overflow-y-hidden md:relative'>
					<div className='md:absolute md:inset-0 overflow-y-auto p-3'>
						<div className='flex justify-between'>
							<div>
								<Link
									to={`/todos/calendar?year=${yesterday.year}&month=${yesterday.month}&day=${yesterday.day}`}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M7 16l-4-4m0 0l4-4m-4 4h18'
										/>
									</svg>
								</Link>
							</div>
							<div className='text-lg'>
								{today.day === current.day ? (
									<div>Today</div>
								) : (
									<div>
										{current.day} {longMonth} {current.year}
									</div>
								)}
							</div>
							<div>
								<Link
									to={`/todos/calendar?year=${tomorrow.year}&month=${tomorrow.month}&day=${tomorrow.day}`}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17 8l4 4m0 0l-4 4m4-4H3'
										/>
									</svg>
								</Link>
							</div>
						</div>
						<div className='mt-3 mb-2 font-bold text-5xl flex flex-wrap'>
							<div>TODOS</div>
							<div className='ml-3'> {rating(percentage)}</div>
						</div>
						<Dustbin />
						<ul>
							{todosForDay.length > 0 ? (
								todosForDay.map((todo: Todo) => (
									<Box
										current={current}
										today={today.day === current.day}
										todo={todo}
										key={todo.id}
									/>
								))
							) : (
								<div className='text-2xl'>Nothing to do - yipee!</div>
							)}
						</ul>
						<div className='w-full mt-3'>
							<fetcher.Form ref={formRef} method='post'>
								<div>
									<label>
										<input
											className='w-full focus:border-b-2 focus:outline-none bg-pink-200 focus:border-blue-500 text-lg md:text-2xl appearance-none border-b-2 border-black'
											type='text'
											name='text'
										/>
									</label>
									<input type='hidden' name='year' value={current.year} />
									<input type='hidden' name='month' value={current.month} />
									<input type='hidden' name='day' value={current.day} />
									<div className='flex justify-end'>
										<button hidden type='submit' name='_action' value='add' />
									</div>
									{errors?.text ? <span>{errors.text}</span> : null}
								</div>
							</fetcher.Form>
						</div>
					</div>
				</div>
				<Outlet />
			</div>
		</DndProvider>
	)
}

// Where item is dropped
function Dustbin() {
	const fetcher = useFetcher()
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.TODO_ITEM,
		drop: (item: DropResult) => {
			console.log(item)
			console.log(`You dropped todo ${item.id}`)
			// submit date data also to update
			fetcher.submit(
				{ id: item.id, _action: 'delete' },
				{
					method: 'post',
					action: '/todos'
				}
			)

			return { id: 'Dustbin' }
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	}))

	const isActive = canDrop && isOver
	let backgroundColor = ''
	if (isActive) {
		backgroundColor = 'bg-green-500'
	} else if (canDrop) {
		backgroundColor = 'bg-blue-500'
	}
	console.log(JSON.stringify(fetcher.submission?.formData.get('id'), null, 2))
	return (
		<div className='flex gap-4'>
			<div ref={drop} role='Dustbin' className={` ${backgroundColor}`}>
				<DeleteButton />
			</div>
			<div>
				<p>
					{fetcher.state === 'submitting'
						? `You dropped ${fetcher.submission.formData.get(
								'id'
						  )} optimistically`
						: fetcher.data?.message}
				</p>
			</div>
		</div>
	)
}

// draggable item

function Box({ todo, current, today }: TodoItemProps) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemTypes.TODO_ITEM,
		item: { id: todo.id },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult<DropResult>()
			console.log(dropResult)
			if (item && dropResult) {
				console.log(`You dropped ${item.id} into ${dropResult.id}!`)
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId()
		})
	}))

	const opacity = isDragging ? 'opacity-40' : 'opacity-100'
	return (
		<div
			ref={drag}
			role='Box'
			className={`${opacity} cursor-move`}
			data-testid={`box-${todo.id}`}
		>
			<TodoItem current={current} today={today} todo={todo} key={todo.id} />
		</div>
	)
}
