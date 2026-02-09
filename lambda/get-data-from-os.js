const { HttpRequest } = require('@aws-sdk/protocol-http')
const { defaultProvider } = require('@aws-sdk/credential-provider-node')
const { SignatureV4 } = require('@aws-sdk/signature-v4')
const { NodeHttpHandler } = require('@aws-sdk/node-http-handler')
const { Sha256 } = require('@aws-crypto/sha256-js')

const region = 'eu-west-1'
const domain = process.env.OPENSEARCH_URL
const api_type = '_search'

const searchDocument = async (term, user) => {
	try {
		let query = {
			size: 25,
			query: {
				multi_match: {
					query: term,
					fields: ['text', 'notes']
				}
			}
		}

		// Create the HTTP request
		const request = new HttpRequest({
			body: JSON.stringify(query),
			headers: {
				'Content-Type': 'application/json',
				host: domain
			},
			hostname: domain,
			method: 'GET',
			path: `/${user}/${api_type}/`
		})

		// Sign the request
		const signer = new SignatureV4({
			credentials: defaultProvider(),
			region: region,
			service: 'es',
			sha256: Sha256
		})

		const signedRequest = await signer.sign(request)

		// Send the request
		const client = new NodeHttpHandler()
		const { response } = await client.handle(signedRequest)

		return new Promise((resolve, reject) => {
			console.log('Response status code:', response.statusCode)
			var responseBody = ''
			response.body.on('data', function (chunk) {
				responseBody += chunk
			})
			response.body.on('end', function () {
				console.log('Response body: ' + responseBody)
				resolve(responseBody)
			})
			response.body.on('error', function (error) {
				console.log('Error: ' + error)
				reject(error)
			})
		})
	} catch (err) {
		console.log(err)
	}
}

exports.handler = async (event) => {
	//console.log("Event: ", JSON.stringify(event));
	const term = event.params.querystring.term
	const user = event.params.querystring.user

	//calling the function to query
	let res = await searchDocument(term, user)
	//console.log("Results Fetched..........");
	res = JSON.parse(res)

	//remove additional data
	let records = []
	res.hits.hits.forEach((data) => {
		records.push(data._source)
	})

	// TODO implement
	const response = {
		statusCode: 200,
		body: JSON.stringify(records)
	}
	return response
}
