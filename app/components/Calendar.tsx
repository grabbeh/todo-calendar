import { randomBg, calendarRating } from '../utils'
import { Link, useFetcher } from '@remix-run/react'
import { useDrop } from 'react-dnd'

export interface Day {
	todos: TodoObject
	date: number
	dayOfWeek: string
}

interface DropResult {
	id: string
}

const ItemTypes = {
	TODO_ITEM: 'todo'
}

export interface TodoObject {
	outstanding: number
	completed: number
}

export interface DateProps {
	day: number
	month: number
	year: number
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
						{data.map((day: Day, i) => {
							return <CalendarDrag key={i} day={day} current={current} />
						})}
					</div>
				</div>
			)}
		</div>
	)
}

export interface CalendarDragProps {
	day: Day
	current: DateProps
}

export interface CalendarItemProps {
	day: Day
	current: DateProps
	isActive: boolean
}

const CalendarItem = ({ day, current, isActive }: CalendarItemProps) => {
	let styles = randomBg()
	let scale = ''
	if (isActive) {
		scale = 'px-2'
	}
	return (
		<div key={day.date}>
			{day.date === current.day ? (
				<div className='text-2xl rounded border-black border-2 bg-red-500 px-1 shadow-lg text-gray-800  flex'>
					<div className='flex flex-grow'>
						<div className='mr-1 text-xs font-bold'>{day.dayOfWeek}</div>
						<div>{day.date}</div>
					</div>
					{day.todos.completed > 0 || day.todos.outstanding > 0 ? (
						<div className='flex flex-wrap bg-red-500'>
							{day.todos.outstanding > 0 && (
								<div className='font-bold text-xs'>{day.todos.outstanding}</div>
							)}
							{calendarRating(day.todos.completed, day.todos.outstanding)}
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
					<div className={`${styles} ${scale}`}>
						<div className='flex flex-grow'>
							<div className='mr-1 font-bold text-xs'>{day.dayOfWeek}</div>
							<div>{day.date}</div>
						</div>
						{day.todos.completed > 0 || day.todos.outstanding > 0 ? (
							<div className='flex flex-wrap'>
								{day.todos.outstanding > 0 && (
									<div className='font-bold text-xs'>
										{day.todos.outstanding}
									</div>
								)}
								{calendarRating(day.todos.completed, day.todos.outstanding)}
							</div>
						) : (
							<div />
						)}
					</div>
				</Link>
			)}
		</div>
	)
}

// Where item is dropped
function CalendarDrag({ current, day }: CalendarDragProps) {
	const fetcher = useFetcher()
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.TODO_ITEM,
		drop: (item: DropResult) => {
			console.log(item)
			console.log(`You dropped todo ${item.id}`)
			// submit date data also to update
			fetcher.submit(
				{
					id: item.id,
					_action: 'droppedOnDate',
					year: current.year,
					month: current.month,
					day: day.date
				},
				{
					method: 'post',
					action: '/todos'
				}
			)
			return { id: 'CalendarItem' }
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	}))

	const isActive = canDrop && isOver
	//console.log(JSON.stringify(fetcher.submission?.formData.get('id'), null, 2))
	return (
		<div ref={drop} role='CalendarItem'>
			<CalendarItem isActive={isActive} current={current} day={day} />
		</div>
	)
}

export { Calendar }
