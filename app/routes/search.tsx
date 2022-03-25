import { requireUserEmail } from '../db/session.server'
import type { ActionFunction } from 'remix'
import { useFetcher } from 'remix'
import axios from 'axios'

export const action: ActionFunction = async ({ request }) => {
	const headers = {
		'x-api-key': process.env.API_KEY
	}
	const API_GATEWAY_URL = process.env.API_GATEWAY_URL
	const user = await requireUserEmail(request)
	const formData = await request.formData()
	const term = formData.get('term')
	const params = { term, user }
	let res = await axios.get(API_GATEWAY_URL, {
		params,
		headers
	})
	return JSON.parse(res.data.body)
	//	return null
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
							value='login'
						>
							SEARCH
						</button>
					</div>
				</fetcher.Form>
				<div>
					{fetcher?.data &&
						fetcher?.data.map((r) => {
							return <div>{r.text}</div>
						})}
				</div>
			</div>
		</div>
	)
}

// Signing route
// https://docs.aws.amazon.com/opensearch-service/latest/developerguide/request-signing.html#request-signing-node
/*
async function search(query, user) {
	// Create the HTTP request
	// TODO: trim unnecessary content
	var request = new HttpRequest({
		body: JSON.stringify(query),
		headers: {
			'Content-Type': 'application/json',
			host: domain
		},
		hostname: domain,
		method: 'PUT',
		// do we split indices by user? Might make sense.
		path: `_search/${user}`
	})

	// Sign the request
	var signer = new SignatureV4({
		credentials: defaultProvider(),
		region: region,
		service: 'es',
		sha256: Sha256
	})

	var signedRequest = await signer.sign(request)
	var signedRequest = await signer.sign(request)

	// Send the request
	var client = new NodeHttpHandler()
	var { response } = await client.handle(signedRequest)
	console.log(response.statusCode + ' ' + response.body.statusMessage)
	var responseBody = ''
	await new Promise(() => {
		response.body.on('data', (chunk) => {
			responseBody += chunk
		})
		response.body.on('end', () => {
			console.log('Response body: ' + responseBody)
		})
	}).catch((error) => {
		console.log('Error: ' + error)
	})
}
*/
