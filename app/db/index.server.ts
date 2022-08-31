import { Todo, User, ShopTable } from './table.server'
import KSUID from 'ksuid'
import _ from 'lodash'

export interface User {
	email: string
	password: string
	passwordHash: string
}

export interface Todo {
	text: string
	status?: string
	id?: string
	user?: string
	year: number
	month: number
	day: number
	date: Date
	notes: string
}

const addTodo = async (todo: Partial<Todo>) => {
	const { text, year, month, day, user } = todo
	const date = new Date(year, month - 1, day)
	const ksuid = await KSUID.random()
	const id = ksuid.string
	let updated = await Todo.put({
		text,
		id,
		user,
		userName: user,
		date,
		GSI1pk: `USER#${user}`,
		GSI1sk: `YEAR${year}#MONTH${month}#DAY${day}#TODO${id}`
	})
	return updated
}

const updateTodo = async (todo: Partial<Todo>) => {
	const { user, id, ...values } = todo
	const existingTodo = await getTodo(user, id)
	return await Todo.update({
		...existingTodo,
		...values,
		user
	})
}

const moveToToday = async (todo: Partial<Todo>) => {
	const { user, id, ...values } = todo
	const today = new Date()
	const day = today.getDate()
	const month = today.getMonth() + 1
	const year = today.getFullYear()
	return await Todo.update({
		id,
		...values,
		date: today,
		GSI1sk: `YEAR${year}#MONTH${month}#DAY${day}#TODO${id}`,
		user
	})
}

export interface MoveTodoProps {
	id: string
	year: number
	month: number
	day: number
	user: string
}

const moveToDate = async ({ id, year, month, day, user }: MoveTodoProps) => {
	const date = new Date(year, month - 1, day)
	return await Todo.update({
		id,
		date,
		GSI1sk: `YEAR${year}#MONTH${month}#DAY${day}#TODO${id}`,
		user
	})
}

const deleteTodo = async (id: string, user: string) => {
	return Todo.delete({ id, user })
}

const getTodos = async (user: string) => {
	const todos = await ShopTable.query(`USER#${user}`, { beginsWith: 'TODO#' })
	return todos.Items
}

const getTodo = async (user: string, id: string) => {
	const todo = await Todo.get({ user, sk: id })
	return todo.Item
}

const getTodosByDate = async (
	user: string,
	year: number,
	month: number,
	day?: number
) => {
	let date
	if (day) date = `YEAR${year}#MONTH${month}#DAY${day}#`
	else date = `YEAR${year}#MONTH${month}#`
	const todos = await ShopTable.query(`USER#${user}`, {
		index: 'GSI1',
		beginsWith: date
	})
	return todos.Items
}

const getCalendarData = async (user: string, year: number, month: number) => {
	let data = await getTodosByDate(user, year, month)
	let supplementedData = data.map((i: Todo) => {
		let d = new Date(i.date)
		let day = d.getDate()
		return { ...i, day }
	})
	let grouped = _.groupBy(supplementedData, 'day')
	let values = _.values(grouped)
	let mapped = values.map((i) => {
		return { todos: sortTodos(i), date: i[0].day }
	})

	let full = Array.from({ length: monthLengths[month - 1] }, (v, i) => {
		let date = new Date(year, month - 1, i + 1)
		let dayOfWeekInt = date.getDay()
		let dayOfWeek = getDayOfWeek(dayOfWeekInt)
		return { date: i + 1, dayOfWeek, todos: { completed: 0, outstanding: 0 } }
	})

	full.forEach((item, i) => {
		mapped.forEach((m) => {
			if (item.date === m.date) {
				full[i] = { ...item, todos: m.todos }
			}
		})
	})
	return full
}

const getDayOfWeek = (int: number) => {
	if (int === 0) return 'S'
	if (int === 1) return 'M'
	if (int === 2) return 'T'
	if (int === 3) return 'W'
	if (int === 4) return 'T'
	if (int === 5) return 'F'
	if (int === 6) return 'S'
}

const sortTodos = (todos: Todo[]) => {
	let outstanding = todos.filter((i: Todo) => i.status === 'OUTSTANDING')
	let completed = todos.filter((i: Todo) => i.status === 'COMPLETED')
	return {
		completed: completed.length,
		outstanding: outstanding.length
	}
}
/*
const getMostActiveHour = tweets => {
  const supplemented = supplementBase(tweets)
  let result = fp.flow(
    fp.groupBy('date'),
    fp.values,
    fp.map(fp.groupBy('hour')),
    fp.map(fp.values),
    fp.flatten,
    fp.map(i => i.length),
    fp.max
  )(supplemented)
  return result
}*/

const addUser = async (user: Partial<User>) => {
	let { email, passwordHash } = user
	// password hashing
	return await User.put({
		email,
		sk: email,
		passwordHash
	})
}

const fetchUser = async (email: string) => {
	const user = await User.get({
		email,
		sk: email
	})
	return user.Item
}

const login = async (email: string, password: string) => {
	let passwordHash = '42kkjskfsjlkfjds34234'
	// password hashing
	let user = await User.get({
		email,
		sk: email
	})
	if (passwordHash !== user.passwordHash) {
		return user
	} else return new Error('No user or password match')
}

export {
	login,
	fetchUser,
	addUser,
	addTodo,
	getTodo,
	getTodos,
	getTodosByDate,
	updateTodo,
	deleteTodo,
	getCalendarData,
	moveToToday,
	moveToDate
}

const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
