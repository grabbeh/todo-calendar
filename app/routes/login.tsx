import { json, useFetcher } from 'remix'
import { useRef } from 'react'
import type { ActionFunction } from 'remix'
import { login, createUserSession } from '../db/session.server'

export interface User {
	email: string
	password: string
}

export interface Errors {
	email?: string
	password?: string
}

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData()
	const { _action } = Object.fromEntries(formData)
	const email = formData.get('email')
	const password = formData.get('password')

	// error handling
	const errors: Errors = {}
	if (_action === 'login') {
		if (!formData.get('email')) {
			errors.email = 'Please provide email!'
		}
		if (!formData.get('password')) {
			errors.password = 'Please provide password!'
		}
		if (Object.keys(errors).length > 0) {
			return json({ errors }, { status: 422 })
		}
		// TODO: try catch
		const user = await login({ email, password })
		if (!user) {
			console.log('No user')
			return null
		} else {
			return createUserSession(user.email, '/todos')
		}
	}
}

export default function Login() {
	const fetcher = useFetcher()
	const formRef = useRef()

	return (
		<div className='flex justify-center h-screen items-center'>
			<div>
				<div className='mb-3 font-bold text-2xl'>Login</div>
				<fetcher.Form ref={formRef} method='post'>
					<div>
						<div className='text-xl'>
							<label>Email</label>
						</div>
						<input
							className='focus:border-b-2 focus:outline-none focus:border-blue-500 text-lg md:text-2xl appearance-none border-b-2 border-gray-200'
							type='text'
							name='email'
						/>
					</div>
					<div>
						<div className='mt-3 text-xl'>
							<label>Password</label>
						</div>
						<input
							className='focus:border-b-2 focus:outline-none focus:border-blue-500 text-lg md:text-2xl appearance-none border-b-2 border-gray-200'
							type='password'
							name='password'
						/>
					</div>
					<div className='mt-3 flex justify-end'>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
							type='submit'
							name='_action'
							value='login'
						>
							LOGIN
						</button>
					</div>
					{fetcher.data?.errors &&
						Object.values(fetcher.data?.errors).map((item, i) => (
							<div>{item}</div>
						))}
				</fetcher.Form>
			</div>
		</div>
	)
}
