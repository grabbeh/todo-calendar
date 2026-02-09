const { HttpRequest } = require('@aws-sdk/protocol-http')
const { defaultProvider } = require('@aws-sdk/credential-provider-node')
const { SignatureV4 } = require('@aws-sdk/signature-v4')
const { NodeHttpHandler } = require('@aws-sdk/node-http-handler')
const { Sha256 } = require('@aws-crypto/sha256-js')
const { unmarshall } = require('@aws-sdk/util-dynamodb')

const region = 'eu-west-1'
const domain =
	'search-calendar-todo-7anx7gwaawl7odh7acb3ihzztm.eu-west-1.es.amazonaws.com'
const type = 'todo'
exports.handler = async (event, context) => {
	const unmarshalledRecords = event.Records.map((record) =>
		unmarshall(record.dynamodb.NewImage)
	)

	let count = 0
	for (const record of unmarshalledRecords) {
		console.log(record)
		if (record.eventName == 'REMOVE') {
			const id = record.id
			// TODO code to delete document
		} else {
			const document = record
			const { userName, id } = document
			return await indexDocument(document, id, userName)
		}
		count += 1
	}
	return `Successfully processed ${count} records.`
}

async function indexDocument(document, id, user) {
	// Create the HTTP request
	// TODO: trim unnecessary content
	var request = new HttpRequest({
		body: JSON.stringify(document),
		headers: {
			'Content-Type': 'application/json',
			host: domain
		},
		hostname: domain,
		method: 'PUT',
		// do we split indices by user? Might make sense.
		path: `${user}/${type}/${id}`
	})

	// Sign the request
	var signer = new SignatureV4({
		credentials: defaultProvider(),
		region: region,
		service: 'es',
		sha256: Sha256
	})

	var signedRequest = await signer.sign(request)

	// Send the request
	var client = new NodeHttpHandler()
	var { response } = await client.handle(signedRequest)
	console.log('Response status code:', response.statusCode)
	var responseBody = ''
	await new Promise((resolve, reject) => {
		response.body.on('data', (chunk) => {
			responseBody += chunk
		})
		response.body.on('end', () => {
			console.log('Response body: ' + responseBody)
			resolve()
		})
		response.body.on('error', (error) => {
			reject(error)
		})
	}).catch((error) => {
		console.log('Error: ' + error)
	})
}
