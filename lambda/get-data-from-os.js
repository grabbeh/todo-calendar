const AWS = require('aws-sdk')
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
		//creating a request body
		const endpoint = new AWS.Endpoint(domain) //creating Endpoint
		const request = new AWS.HttpRequest(endpoint, region) //creating request body with endpoint and region
		request.method = 'GET' // method PUT, POST, GET & Delete
		request.path += user + '/' + api_type + '/'
		request.body = JSON.stringify(query)
		request.headers['host'] = domain
		request.headers['Content-Type'] = 'application/json'
		request.headers['Content-Length'] = Buffer.byteLength(request.body)

		//Signing the request with authorized credentails like IAM user or role
		const credentials = new AWS.EnvironmentCredentials('AWS')
		const signer = new AWS.Signers.V4(request, 'es')
		signer.addAuthorization(credentials, new Date())

		//http request to the server
		const client = new AWS.HttpClient()
		return new Promise((resolve, reject) => {
			client.handleRequest(
				request,
				null,
				function (response) {
					console.log(response.statusCode + ' ' + response.statusMessage)
					var responseBody = ''
					response.on('data', function (chunk) {
						responseBody += chunk
					})
					response.on('end', function (chunk) {
						console.log('Response body: ' + responseBody)
						resolve(responseBody)
					})
				},
				function (error) {
					console.log('Error: ' + error)
					reject(error)
				}
			)
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
