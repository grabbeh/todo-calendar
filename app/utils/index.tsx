const rating = (percentage: number) => {
	if (percentage === 100) return <div>😃</div>
	if (percentage > 80) return <div>🙂</div>
	if (percentage > 60) return <div>☹️</div>
	if (percentage > 40) return <div>😔</div>
	if (percentage > 20) return <div>😢</div>
	if (percentage > 0) return <div>😢</div>
	if (percentage === 0) return <div>😭</div>
}

export interface DateProps {
	day: number
	month: number
	year: number
}

const dateProvider = (year: number, month: number, day: number) => {
	const current = {} as DateProps
	current.year = year
	current.month = month
	current.day = day

	const date = new Date(year, month - 1, day)
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
	return { yesterday, current, tomorrow, longMonth }
}

const randomBg = (seed: number) => {
	const colours = [
		'bg-red-200',
		'bg-orange-200',
		'bg-yellow-200',
		'bg-green-200',
		'bg-teal-200',
		'bg-indigo-200',
		'bg-purple-200',
		'bg-pink-200'
	]
	let index = seed % colours.length
	let color = colours[index]

	return `text-2xl border-black rounded border-2 shadow-lg ${color} px-1 text-gray-800 flex`
}

const calendarRating = (completed: number, outstanding: number) => {
	const total = completed + outstanding
	if (total === 0) return null
	const percentage = Math.floor((completed / total) * 100)
	if (percentage === 100) return <div>✔️😃</div>
	if (percentage > 80) return <div>🙂</div>
	if (percentage > 60) return <div>☹️</div>
	if (percentage > 40) return <div>😔</div>
	if (percentage > 20) return <div>😢</div>
	if (percentage > 0) return <div>😢</div>
	if (percentage === 0) return <div>😭</div>
}

export { calendarRating, rating, dateProvider, randomBg }
