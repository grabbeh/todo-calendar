import {
	useLoaderData,
	Link,
	json,
	useFetcher,
	useActionData,
	Links,
	Meta,
	Scripts,
	redirect,
	Outlet
} from 'remix'
import type { ActionFunction, LoaderFunction } from 'remix'
import { useRef, useEffect, useState, CSSProperties } from 'react'
import { Fireworks, useFireworks } from 'fireworks-js/dist/react'
import {
	addTodo,
	getTodosByDate,
	deleteTodo,
	updateTodo,
	moveToToday
} from '../db/index.server'
import { requireUserEmail, getUser } from '../db/session.server'
import mario from '../assets/mario.mp3'

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
	const current = {} as DateProps
	current.year = parseInt(url.searchParams.get('year') as any) || today.year
	current.month = parseInt(url.searchParams.get('month') as any) || today.month
	current.day = parseInt(url.searchParams.get('day') as any) || today.day
	const todosForDay: Todo[] = await getTodosByDate(
		user.email,
		current.year,
		current.month,
		current.day
	)

	const date = new Date(current.year, current.month - 1, current.day)
	const longMonth = date.toLocaleString('default', { month: 'long' })

	const t = new Date(date)
	t.setDate(t.getDate() + 1)
	const tomorrow = {} as DateProps
	tomorrow.day = t.getDate()
	tomorrow.month = t.getMonth() + 1
	tomorrow.year = t.getFullYear()

	const y = new Date(date)
	y.setDate(y.getDate() - 1)
	const yesterday = {} as DateProps
	yesterday.day = y.getDate()
	yesterday.month = y.getMonth() + 1
	yesterday.year = y.getFullYear()

	let completed = todosForDay.filter((i: Todo) => i.status === 'COMPLETED')
	let percentage = Math.floor((completed.length / todosForDay.length) * 100)

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
		<div>
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
							<div className='ml-3'> {Rating(percentage)}</div>
						</div>
						<ul>
							{todosForDay.length > 0 ? (
								todosForDay.map((todo: Todo) => (
									<TodoItem
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
		</div>
	)
}

export interface TodoItemProps {
	today: boolean
	current: DateProps
	todo: Todo
}

const TodoItem = (props: TodoItemProps) => {
	const [audio, setAudio] = useState(null)
	const [editable, setEditable] = useState(false)
	const { enabled, options, setEnabled } = useFireworks({
		initialStart: false,
		initialOptions: {
			hue: {
				min: 0,
				max: 345
			},
			opacity: 1,
			delay: {
				min: 15,
				max: 15
			},
			rocketsPoint: 50,
			speed: 2,
			acceleration: 1.2,
			friction: 0.96,
			gravity: 1,
			particles: 40,
			trace: 3,
			explosion: 10,
			lineStyle: 'square',
			lineWidth: {
				explosion: {
					min: 10,
					max: 10
				},
				trace: {
					min: 10,
					max: 10
				}
			},
			autoresize: true,
			brightness: {
				min: 50,
				max: 80,
				decay: {
					min: 0.015,
					max: 0.03
				}
			},
			boundaries: {
				visible: false
			}
		}
	})
	const style: CSSProperties = {
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		position: 'fixed',
		opacity: 0.5,
		zIndex: -999
	}
	const { todo, today, current } = props
	const fetcher = useFetcher()
	const isDeleting =
		fetcher.submission?.formData.get('id') === todo.id &&
		fetcher.submission?.formData.get('_action') === 'delete'
	const isChangingStatus =
		fetcher.submission?.formData.get('id') === todo.id &&
		fetcher.submission?.formData.get('_action') === 'changeStatus'
	const handleChange = (event: any) => {
		return fetcher.submit(event.currentTarget, { replace: true })
	}

	useEffect(() => {
		if (isChangingStatus) {
			setEnabled()
		}
	}, [isChangingStatus])

	useEffect(() => {
		setAudio(new Audio(mario))
	}, [])
	const start = (status: string) => {
		console.log(status)
		if (status === 'OUTSTANDING') {
			audio.crossOrigin = 'anonymous'
			var playPromise = audio.play()
			console.log(playPromise)
			if (playPromise !== undefined) {
				playPromise
					.then(function () {
						// Automatic playback started!
					})
					.catch(function (error) {
						// Automatic playback failed.
						// Show a UI element to let the user manually start playback.
					})
			}
		}
	}

	return (
		<li
			className={`${isDeleting ? 'hidden' : ''} py-1 flex text-xl md:text-2xl`}
			key={todo.id}
		>
			<div>
				{!editable && (
					<fetcher.Form replace method='post' onChange={handleChange}>
						<label className='flex'>
							<div>
								<input
									type='checkbox'
									defaultChecked={todo.status === 'COMPLETED'}
									value={todo.status}
									name='status'
								/>
							</div>
							<input type='hidden' name='id' value={todo.id} />
							<input type='hidden' name='_action' value='changeStatus' />
							<div
								onClick={() => {
									start(todo.status)
								}}
								className={`${
									todo.status === 'COMPLETED' || isChangingStatus
										? 'line-through'
										: ''
								} ml-3 text-gray-800`}
							>
								{todo.text}
							</div>
						</label>
					</fetcher.Form>
				)}
			</div>
			<div className='flex'>
				{!editable ? (
					<fetcher.Form replace method='post'>
						<div className='ml-3'>
							<input type='hidden' name='id' value={todo.id} />
							<input type='hidden' name='_action' value='delete' />
							<DeleteButton />
						</div>
					</fetcher.Form>
				) : (
					''
				)}
				{!editable && todo.status === 'OUTSTANDING' ? (
					<button
						onClick={() => setEditable(true)}
						className='flex justify-end'
					>
						<EditButton />
					</button>
				) : (
					''
				)}
				{!editable && !today && todo.status === 'OUTSTANDING' ? (
					<fetcher.Form replace method='post'>
						<input type='hidden' name='id' value={todo.id} />
						<input type='hidden' name='_action' value='moveToToday' />
						<div className='flex justify-end'>
							<button type='submit'>
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
										d='M5 11l7-7 7 7M5 19l7-7 7 7'
									/>
								</svg>
							</button>
						</div>
					</fetcher.Form>
				) : (
					''
				)}
				{!editable ? (
					<Link
						className={`${todo.notes ? 'text-black' : 'text-slate-300'}`}
						to={`/todos/notes/${todo.id}?year=${current.year}&month=${current.month}&day=${current.day}`}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
							/>
						</svg>
					</Link>
				) : (
					''
				)}
			</div>
			<div className='flex flex-wrap'>
				{editable && (
					<fetcher.Form replace method='post'>
						<label>
							<input
								defaultValue={todo.text}
								className='focus:border-b-2 focus:outline-none text-2xl appearance-none border-b-2 border-gray-200'
								type='text'
								name='text'
							/>
						</label>
						<input type='hidden' name='id' value={todo.id} />
						<div className='flex justify-end'>
							<button hidden type='submit' name='_action' value='edit'>
								Edit
							</button>
						</div>
					</fetcher.Form>
				)}
				{editable && (
					<button
						onClick={() => {
							setEditable(false)
						}}
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
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				)}
			</div>
			<Fireworks style={style} enabled={enabled} options={options}></Fireworks>
		</li>
	)
}

const EditButton = () => (
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
			d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
		/>
	</svg>
)

const DeleteButton = () => (
	<button type='submit'>
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
				d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
			/>
		</svg>
	</button>
)

const Rating = (percentage: number) => {
	if (percentage === 100) return <div>😃</div>
	if (percentage > 80) return <div>🙂</div>
	if (percentage > 60) return <div>☹️</div>
	if (percentage > 40) return <div>😔</div>
	if (percentage > 20) return <div>😢</div>
	if (percentage > 0) return <div>😢</div>
	if (percentage === 0) return <div>😭</div>
}

export function ErrorBoundary({ error }) {
	console.log(error.message)
	return (
		<html>
			<head>
				<title>Oh no!</title>
				<Meta />
				<Links />
			</head>
			<body>
				{error.message}
				<Scripts />
			</body>
		</html>
	)
}
