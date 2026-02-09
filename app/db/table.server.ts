// Require AWS SDK and instantiate DocumentClient
import { Table, Entity } from 'dynamodb-toolbox'
import AWS from 'aws-sdk'

// We avoid top-level throws or side-effects that might crash the Lambda during initialization.
// Environment variables should be set in the Netlify dashboard.

let _DocumentClient: AWS.DynamoDB.DocumentClient | undefined
let _ShopTable: Table | undefined
let _User: Entity<any, any, any> | undefined
let _Todo: Entity<any, any, any> | undefined

try {
	if (process.env.AWS_KEY && process.env.AWS_SECRET) {
		AWS.config.update({
			region: 'eu-west-1',
			accessKeyId: process.env.AWS_KEY,
			secretAccessKey: process.env.AWS_SECRET
		})
	}

	_DocumentClient = new AWS.DynamoDB.DocumentClient()

	// Instantiate a table
	_ShopTable = new Table({
		name: 'shop',
		partitionKey: 'pk',
		sortKey: 'sk',
		indexes: {
			GSI1: { partitionKey: 'GSI1pk', sortKey: 'GSI1sk' }
		},
		DocumentClient: _DocumentClient
	})

	_User = new Entity({
		name: 'User',
		attributes: {
			email: { partitionKey: true, prefix: 'USER#' },
			sk: { sortKey: true, prefix: 'USER#' },
			passwordHash: { type: 'string' }
		},
		table: _ShopTable
	}) as Entity<any, any, any>

	_Todo = new Entity({
		name: 'Todo',
		attributes: {
			user: { partitionKey: true, prefix: 'USER#' },
			sk: { sortKey: true, prefix: 'TODO#' },
			text: { type: 'string' },
			status: { type: 'string', default: 'OUTSTANDING' },
			editable: { type: 'string' },
			notes: { type: 'string' },
			id: ['sk', 0],
			userName: { type: 'string' },
			date: { type: 'string' },
			GSI1pk: { type: 'string' },
			GSI1sk: { type: 'string' }
		},
		table: _ShopTable
	}) as Entity<any, any, any>
} catch (error: any) {
	console.error('Failed to initialize DynamoDB connection:', error)
}

// Proxies to ensure we get a helpful error if the DB failed to initialize
export const ShopTable = new Proxy({} as Table, {
	get(target, prop) {
		if (!_ShopTable) {
			throw new Error('DynamoDB ShopTable is not initialized. Check your AWS credentials.')
		}
		return (_ShopTable as any)[prop]
	}
})

export const User = new Proxy({} as Entity<any, any, any>, {
	get(target, prop) {
		if (!_User) {
			throw new Error('DynamoDB User entity is not initialized. Check your AWS credentials.')
		}
		return (_User as any)[prop]
	}
})

export const Todo = new Proxy({} as Entity<any, any, any>, {
	get(target, prop) {
		if (!_Todo) {
			throw new Error('DynamoDB Todo entity is not initialized. Check your AWS credentials.')
		}
		return (_Todo as any)[prop]
	}
})
