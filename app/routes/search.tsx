import { json } from '@remix-run/node'
import type { ActionFunction } from '@remix-run/node'
import { useFetcher } from '@remix-run/react'
import axios from 'axios'
import { requireUserEmail } from '../db/session.server'

export const action: ActionFunction = async ({ request }) => {
	const API_KEY = process.env.API_KEY
	const API_GATEWAY_URL = process.env.API_GATEWAY_URL

	if (!API_GATEWAY_URL) {
		return json({ error: 'Search API not configured' }, { status: 500 })
	}

	const headers = {
		'x-api-key': API_KEY || ''
	}

	try {
		const user = await requireUserEmail(request)
		const formData = await request.formData()
		const term = formData.get('term')

		if (!term) {
			return json({ error: 'Search term is required' }, { status: 400 })
		}

		const params = { term, user }
		const res = await axios.get(API_GATEWAY_URL, {
			params,
			headers
		})

		if (res.data && res.data.body) {
			return JSON.parse(res.data.body)
		}
		return []
	} catch (error) {
		console.error('Search error:', error)
		return json({ error: 'Failed to perform search' }, { status: 500 })
	}
}

export default function Search() {
	const fetcher = useFetcher()

	return (
		<div className='flex justify-center h-screen items-center'>
			<div>
				<div className='mb-3 font-bold text-2xl'>Search</div>
				<fetcher.Form method='post'>
					<div>
						<div className='text-xl'>
							<label>Search term</label>
						</div>
						<input
							className='focus:border-b-2 focus:outline-none focus:border-blue-500 text-lg md:text-2xl appearance-none border-b-2 border-gray-200'
							type='text'
							name='term'
						/>
					</div>

					<div className='mt-3 flex justify-end'>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
							type='submit'
							name='_action'
							value='search'
						>
							SEARCH
						</button>
					</div>
				</fetcher.Form>
				<div className='mt-4'>
					{fetcher?.data && fetcher.data.error && (
						<div className='text-red-500'>{fetcher.data.error}</div>
					)}
					{Array.isArray(fetcher?.data) &&
						fetcher.data.map((r, i) => {
							return <div key={i}>{r.text}</div>
						})}
				</div>
			</div>
		</div>
	)
}
