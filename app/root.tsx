import type { MetaFunction } from '@remix-run/node'
import React from 'react'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteError,
	isRouteErrorResponse
} from '@remix-run/react'
import styles from './styles/app.css?url'

export const meta: MetaFunction = () => {
	return [{ title: 'Todo app' }]
}

export function links() {
	return [
		{
			rel: 'preload',
			as: 'font',
			href: '/fonts/inter-v8-latin-500.woff2',
			type: 'font/woff2',
			crossOrigin: 'anonymous'
		},
		{ rel: 'stylesheet', href: styles }
	]
}

export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body style={{ fontFamily: 'Inter' }}>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export function ErrorBoundary() {
	const error = useRouteError()

	return (
		<html lang='en'>
			<head>
				<title>System Error</title>
				<Meta />
				<Links />
			</head>
			<body className='p-8'>
				<div className='max-w-xl mx-auto bg-red-50 p-6 rounded-lg border border-red-200'>
					<h1 className='text-2xl font-bold text-red-800 mb-4'>
						{isRouteErrorResponse(error)
							? `${error.status} ${error.statusText}`
							: 'Application Error'}
					</h1>
					<p className='text-red-700 mb-4'>
						{isRouteErrorResponse(error)
							? error.data
							: error instanceof Error
							? error.message
							: 'An unexpected error occurred.'}
					</p>
					{error instanceof Error && error.stack && (
						<pre className='bg-red-100 p-4 rounded text-sm overflow-auto text-red-900'>
							{error.stack}
						</pre>
					)}
				</div>
				<Scripts />
			</body>
		</html>
	)
}
