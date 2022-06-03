import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Link, Links, Meta, Scripts, useLoaderData } from "@remix-run/react";
import { getUserEmail } from '../db/session.server'

export const loader: LoaderFunction = async ({ request }) => {
	let user = await getUserEmail(request)
	if (user) {
		return redirect('/todos')
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

export function ErrorBoundary({ error }) {
	return (
		<html>
			<head>
				<title>Oh no!</title>
				<Meta />
				<Links />
			</head>
			<body>
				{error}
				<Scripts />
			</body>
		</html>
	)
}
