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

	if (isRouteErrorResponse(error)) {
		return (
			<div>
				<h1>
					{error.status} {error.statusText}
				</h1>
				<p>{error.data}</p>
			</div>
		)
	} else if (error instanceof Error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{error.message}</p>
				<pre>{error.stack}</pre>
			</div>
		)
	} else {
		return <h1>Unknown Error</h1>
	}
}
