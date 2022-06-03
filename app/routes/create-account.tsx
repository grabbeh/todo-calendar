import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useFetcher, useTransition } from "@remix-run/react";
import { useRef, useEffect } from 'react'
import { register } from '../db/session.server'

export interface User {
	email: string
	password: string
}

export interface Errors {
	emailError?: string
	passwordError?: string
	passwordLength?: string
}

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData()
	const email = formData.get('email')
	const password = formData.get('password')

	// error handling
	const errors: Errors = {}
	if (!email) {
		errors.emailError = 'Please provide email!'
	}
	if (!password) {
		errors.passwordError = 'Please provide password!'
	}
	if (password?.length < 7) {
		errors.passwordLength = 'Password a bit too short there'
	}
	if (Object.keys(errors).length > 0) {
		return json({ errors }, { status: 422 })
	}

	try {
		await register({ email, password })
		redirect('/login')
	} catch (e) {
		console.log(e.message)
		return { serverError: e.message }
	}
	return redirect('/login')
}

export default function CreateAccount() {
	const fetcher = useFetcher()
	const transition = useTransition()
	const isAdding =
		transition?.state === 'submitting' &&
		transition.submission?.formData.get('_action') === 'add'
	const formRef = useRef()

	let serverFailure = fetcher.data?.serverError

	useEffect(() => {
		if (!isAdding) {
			formRef.current?.reset()
		}
	}, [isAdding])

	return (
		<div className='flex justify-center h-screen items-center'>
			<div>
				<div className='mb-3 font-bold text-2xl'>Create account</div>
				<fetcher.Form ref={formRef} method='post'>
					<div>
						<div className='font-bold text-xl'>
							<label>Email</label>
						</div>
						<input
							className='focus:border-b-2 focus:outline-none focus:border-blue-500 text-lg md:text-2xl appearance-none border-b-2 border-gray-200'
							type='text'
							name='email'
						/>
					</div>
					<div>
						<div className='mt-3 font-bold text-xl'>
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
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
							type='submit'
							name='_action'
							value='add'
						>
							CREATE
						</button>
					</div>
					{serverFailure ? serverFailure : ''}
					{fetcher.data?.errors &&
						Object.values(fetcher.data?.errors).map((item, i) => (
							<div>{item}</div>
						))}
				</fetcher.Form>
			</div>
		</div>
	)
}
