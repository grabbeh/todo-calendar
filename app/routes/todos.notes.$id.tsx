import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useActionData, useFetcher, useLoaderData } from "@remix-run/react";
import { getTodo, updateTodo } from '../db/index.server'
import { requireUserEmail, getUser } from '../db/session.server'
import { useRef, useState } from 'react'

export interface Todo {
	text: string
	status: string
	id: any
	user: string
	editable: boolean
	month: number
	year: number
	day: number
	email: string
	notes: string
}

export interface PostTodo {
	text?: string
	status?: string
	id?: any
	user?: string
	editable?: boolean
	email: string
}

export interface Errors {
	text?: string
}

export interface Day {
	todos: number
	date: number
}

export interface DateProps {
	day: number
	month: number
	year: number
}

export const action: ActionFunction = async ({ request }) => {
	const user = await requireUserEmail(request)
	const formData = await request.formData()
	const { _action, ...values } = Object.fromEntries(formData)
	return await updateTodo({ ...values, user })
}

export const loader: LoaderFunction = async ({ request, params }) => {
	const user = await getUser(request)
	if (params.id) {
		const todo: Todo = await getTodo(user.email, params.id)
		return {
			todo
		}
	}
}

export default function Notes() {
	const { todo } = useLoaderData()
	const fetcher = useFetcher()
	const errors = useActionData()
	const formRef = useRef()

	return (
		<div
			key={todo.id}
			className='relative bg-blue-500 text-white flex-col h-screen px-2 w-full md:w-1/2'
		>
			<div>
				<div className='flex justify-between'>
					<div className='text-lg mt-3 mb-1'>Notes</div>
					<div>
						<form action='/logout' method='post'>
							<button type='submit' className='button'>
								Logout
							</button>
						</form>
					</div>
				</div>

				<div className='text-2xl'>{todo.text}</div>

				<fetcher.Form key={todo.id} ref={formRef} method='post'>
					<textarea
						defaultValue={todo.notes}
						className='w-full h-96 focus:border-2 focus:outline-none bg-blue-500 text-white text-base md:text-xl appearance-none'
						name='notes'
					/>
					<input type='hidden' name='id' value={todo.id} />
					<button className='bg-blue-500 text-white' type='submit'>
						{todo.notes ? <span>Update</span> : <span>Add</span>}{' '}
						{fetcher.type === 'done' && <span>✔️</span>}
					</button>
					{errors?.text ? <span>{errors.text}</span> : null}
				</fetcher.Form>
			</div>
		</div>
	)
}

const EditButton = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
		/>
	</svg>
)
