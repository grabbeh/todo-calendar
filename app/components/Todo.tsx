import React, { useState, useEffect } from 'react'
import { Link, useFetcher } from '@remix-run/react'
import mario from '../assets/mario.mp3'
import { EditButton, MoveToToday } from '../components/icons'

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

const TodoItem = ({ todo, today, current }: TodoItemProps) => {
	const [audio, setAudio] = useState(null)
	const [editable, setEditable] = useState(false)
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
		setAudio(new Audio(mario))
	}, [])
	const start = (status: string) => {
		if (status === 'OUTSTANDING') {
			audio.crossOrigin = 'anonymous'
			var playPromise = audio.play()
			if (playPromise !== undefined) {
				playPromise.then(function () {}).catch(function () {})
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
							<MoveToToday />
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
								className='focus:border-b-2 focus:outline-none text-2xl appearance-none bg-pink-200 border-b-2 border-gray-200'
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
		</li>
	)
}

export { TodoItem }
