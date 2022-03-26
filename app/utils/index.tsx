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

const calendarRating = (completed: number, outstanding: number) => {
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

export { calendarRating, rating, dateProvider, randomBg }
