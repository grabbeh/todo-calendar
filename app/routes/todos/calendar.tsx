import { useLoaderData, Link, useTransition, Links, Meta, Scripts } from 'remix'
import type { LoaderFunction } from 'remix'
import { useRef, useEffect } from 'react'
import { getCalendarData } from '../../db/index.server'
import { getUser } from '../../db/session.server'

export interface Errors {
	text?: string
}

export interface TodoObject {
	outstanding: number
	completed: number
}

export interface Day {
	todos: TodoObject
	date: number
	dayOfWeek: string
}

export interface DateProps {
	day: number
	month: number
	year: number
}

export const loader: LoaderFunction = async ({ request }) => {
	const user = await getUser(request)
	let url = new URL(request.url)
	const now = new Date()
	const today = {} as DateProps
	today.day = now.getDate()
	today.month = now.getMonth() + 1
	today.year = now.getFullYear()
	const current = {} as DateProps
	current.year = parseInt(url.searchParams.get('year') as any) || today.year
	current.month = parseInt(url.searchParams.get('month') as any) || today.month
	current.day = parseInt(url.searchParams.get('day') as any) || today.day

	const calendarData: Day[] = await getCalendarData(
		user.email,
		current.year,
		current.month
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

	return {
		calendarData,
		current,
		yesterday,
		tomorrow,
		longMonth,
		today,
		user
	}
}

export default function Todos() {
	const { calendarData, current, longMonth } = useLoaderData()

	const transition = useTransition()
	const isAdding =
		transition?.state === 'submitting' &&
		transition.submission?.formData.get('_action') === 'add'
	const formRef = useRef()

	useEffect(() => {
		if (!isAdding) {
			formRef.current?.reset()
		}
	}, [isAdding])

	return (
		<Calendar
			loading={transition?.state === 'loading'}
			data={calendarData}
			current={current}
			longMonth={longMonth}
		/>
	)
}

export interface CalendarProps {
	data: [Day]
	longMonth: string
	current: DateProps
	loading: boolean
}

const Calendar = ({ loading, data, current, longMonth }: CalendarProps) => {
	return (
		<div className='relative flex-col h-screen px-2 bg-blue-500 w-full md:w-1/2'>
			{loading ? (
				<div className='flex h-screen text-neutral-50 items-center justify-center text-2xl'>
					Loading...
				</div>
			) : (
				<div>
					<div className='flex justify-between'>
						<div className='text-lg text-white mt-3 mb-1'>{longMonth}</div>
						<form className='text-white text-xs' action='/logout' method='post'>
							<button type='submit' className='button'>
								Logout
							</button>
						</form>
					</div>
					<div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
						{data.map((day: Day) => {
							let styles = randomBg()
							return (
								<div key={day.date}>
									{day.date === current.day ? (
										<div className='text-2xl rounded border-black border-2 bg-red-500 px-1 shadow-lg text-gray-800  flex'>
											<div className='flex flex-grow'>
												<div className='mr-1 text-xs font-bold'>
													{day.dayOfWeek}
												</div>
												<div>{day.date}</div>
											</div>
											{day.todos.completed > 0 || day.todos.outstanding > 0 ? (
												<div className='flex flex-wrap bg-red-500'>
													{day.todos.outstanding > 0 && (
														<div className='font-bold text-xs'>
															{day.todos.outstanding}
														</div>
													)}
													{Rating(day.todos.completed, day.todos.outstanding)}
												</div>
											) : (
												''
											)}
										</div>
									) : (
										<Link
											key={day.date}
											to={`/todos/calendar?year=${current.year}&month=${current.month}&day=${day.date}`}
										>
											<div className={styles}>
												<div className='flex flex-grow'>
													<div className='mr-1 font-bold text-xs'>
														{day.dayOfWeek}
													</div>
													<div>{day.date}</div>
												</div>
												{day.todos.completed > 0 ||
												day.todos.outstanding > 0 ? (
													<div className='flex flex-wrap'>
														{day.todos.outstanding > 0 && (
															<div className='font-bold text-xs'>
																{day.todos.outstanding}
															</div>
														)}
														{Rating(day.todos.completed, day.todos.outstanding)}
													</div>
												) : (
													<div />
												)}
											</div>
										</Link>
									)}
								</div>
							)
						})}
					</div>
				</div>
			)}
		</div>
	)
}

const Tick = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
	</svg>
)

export function ErrorBoundary({ error }) {
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

const Rating = (completed: number, outstanding: number) => {
	const total = completed + outstanding
	const percentage = Math.floor((completed / total) * 100)
	if (percentage === 100) return <div>✔️😃</div>
	if (percentage > 80) return <div>🙂</div>
	if (percentage > 60) return <div>☹️</div>
	if (percentage > 40) return <div>😔</div>
	if (percentage > 20) return <div>😢</div>
	if (percentage > 0) return <div>😢</div>
	if (percentage === 0) return <div>😭</div>
}

const randomBg = () => {
	const colours = [
		'bg-red-200',
		'bg-orange-200',
		'bg-amber-200',
		'bg-yellow-200',
		'bg-lime-200',
		'bg-green-200',
		'bg-emerald-200',
		'bg-teal-200',
		'bg-cyan-200',
		'bg-sky-200',
		'bg-indigo-200',
		'bg-violet-200',
		'bg-purple-200',
		'bg-fuchsia-200',
		'bg-pink-200',
		'bg-rose-200'
	]
	let random = colours[(colours.length * Math.random()) | 0]

	return `text-2xl border-black rounded border-2 shadow-lg ${random} px-1 text-gray-800 flex`
}
