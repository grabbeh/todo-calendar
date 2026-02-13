// Require AWS SDK and instantiate DocumentClient
import { Table } from 'dynamodb-toolbox/table'
import { Entity } from 'dynamodb-toolbox/entity'
import { item } from 'dynamodb-toolbox/schema/item'
import { string } from 'dynamodb-toolbox/schema/string'
import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

export const userTransformer = {
	encode: (val: string): string => `USER#${val}`,
	decode: (val: string): string => val.replace(/^USER#/, '')
}

export const todoTransformer = {
	encode: (val: string): string => `TODO#${val}`,
	decode: (val: string): string => val.replace(/^TODO#/, '')
}

// We avoid top-level throws or side-effects that might crash the Lambda during initialization.
// Environment variables should be set in the Netlify dashboard.

let _DocumentClient: DynamoDBDocumentClient | undefined
let _ShopTableInstance: any | undefined
let _UserInstance: any | undefined
let _TodoInstance: any | undefined

try {
	const clientConfig: DynamoDBClientConfig = {
		region: 'eu-west-1'
	}

	if (process.env.AWS_KEY && process.env.AWS_SECRET) {
		clientConfig.credentials = {
			accessKeyId: process.env.AWS_KEY,
			secretAccessKey: process.env.AWS_SECRET
		}
	}

	const client = new DynamoDBClient(clientConfig)
	_DocumentClient = DynamoDBDocumentClient.from(client)

	// Instantiate a table
	const _ShopTable = new Table({
		name: 'shop',
		partitionKey: { name: 'pk', type: 'string' },
		sortKey: { name: 'sk', type: 'string' },
		indexes: {
			GSI1: {
				type: 'global',
				partitionKey: { name: 'GSI1pk', type: 'string' },
				sortKey: { name: 'GSI1sk', type: 'string' }
			}
		},
		documentClient: _DocumentClient
	})
	_ShopTableInstance = _ShopTable

	const _UserEntity = new Entity({
		name: 'User',
		schema: item({
			email: string().key().savedAs('pk').transform(userTransformer),
			sk: string().key().transform(userTransformer),
			passwordHash: string().optional()
		}),
		table: _ShopTable
	})
	_UserInstance = _UserEntity

	const _TodoEntity = new Entity({
		name: 'Todo',
		schema: item({
			user: string().key().savedAs('pk').transform(userTransformer),
			id: string().key().savedAs('sk').transform(todoTransformer),
			text: string().optional(),
			status: string().default('OUTSTANDING'),
			editable: string().optional(),
			notes: string().optional(),
			userName: string().optional(),
			date: string().optional(),
			GSI1pk: string().optional().transform(userTransformer),
			GSI1sk: string().optional()
		}),
		table: _ShopTable
	})
	_TodoInstance = _TodoEntity
} catch (error: any) {
	console.error('Failed to initialize DynamoDB connection:', error)
}

// Proxies to ensure we get a helpful error if the DB failed to initialize
export const ShopTable: any = new Proxy({} as any, {
	get(target, prop) {
		if (!_ShopTableInstance) {
			throw new Error('DynamoDB ShopTable is not initialized. Check your AWS credentials.')
		}
		return (_ShopTableInstance as any)[prop]
	}
})

export const User: any = new Proxy({} as any, {
	get(target, prop) {
		if (!_UserInstance) {
			throw new Error('DynamoDB User entity is not initialized. Check your AWS credentials.')
		}
		return (_UserInstance as any)[prop]
	}
})

export const Todo: any = new Proxy({} as any, {
	get(target, prop) {
		if (!_TodoInstance) {
			throw new Error('DynamoDB Todo entity is not initialized. Check your AWS credentials.')
		}
		return (_TodoInstance as any)[prop]
	}
})
