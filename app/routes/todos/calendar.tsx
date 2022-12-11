import type { LoaderFunction } from '@remix-run/node'
import {
	Links,
	Meta,
	Scripts,
	useLoaderData,
	useTransition
} from '@remix-run/react'
import { useRef, useEffect } from 'react'
import { getCalendarData } from '../../db/index.server'
import { getUser } from '../../db/session.server'
import { Calendar } from '../../components/Calendar'

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

	return {
		calendarData,
		current,
		longMonth,
		today,
		user
	}
}

export default function CalendarHolder() {
	const { calendarData, current, longMonth } = useLoaderData()
	const transition = useTransition()
	return (
		<Calendar
			loading={transition?.state === 'loading'}
			data={calendarData}
			current={current}
			longMonth={longMonth}
		/>
	)
}
