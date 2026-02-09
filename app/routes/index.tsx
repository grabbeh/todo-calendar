import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Link, Links, Meta, Scripts, useLoaderData, useRouteError, isRouteErrorResponse } from "@remix-run/react";
import { getUserEmail } from '../db/session.server'

export const loader: LoaderFunction = async ({ request }) => {
	let user = await getUserEmail(request)
	if (user) {
		const now = new Date()
		const year = now.getFullYear()
		const month = now.getMonth() + 1
		const day = now.getDate()
		return redirect(
			`/todos/calendar?year=${year}&month=${month}&day=${day}`
		)
	}
	return null
}

export default function Index() {
	return (
		<div className='bg-pink-500 text-3xl flex justify-center h-screen pt-4'>
			<div>
				<div className='font-bold'>TODO APP</div>
				<div>
					<Link to='/login'>Login</Link>
				</div>
				<div>
					<Link to='/create-account'>Register</Link>
				</div>
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	const error = useRouteError()
	let errorMessage = 'Unknown error'
	if (isRouteErrorResponse(error)) {
		errorMessage = `${error.status} ${error.statusText}`
	} else if (error instanceof Error) {
		errorMessage = error.message
	} else if (typeof error === 'string') {
		errorMessage = error
	}

	return (
		<html>
			<head>
				<title>Oh no!</title>
				<Meta />
				<Links />
			</head>
			<body>
				{errorMessage}
				<Scripts />
			</body>
		</html>
	)
}
