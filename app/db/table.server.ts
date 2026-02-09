// Require AWS SDK and instantiate DocumentClient
import { Table } from 'dynamodb-toolbox/table'
import { Entity } from 'dynamodb-toolbox/entity'
import { item } from 'dynamodb-toolbox/schema/item'
import { string } from 'dynamodb-toolbox/schema/string'
import { prefix } from 'dynamodb-toolbox/transformers/prefix'
import { EntityRepository } from 'dynamodb-toolbox/entity/actions/repository'
import { TableRepository } from 'dynamodb-toolbox/table/actions/repository'
import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

// We avoid top-level throws or side-effects that might crash the Lambda during initialization.
// Environment variables should be set in the Netlify dashboard.

let _DocumentClient: DynamoDBDocumentClient | undefined
let _ShopTableRepo: any | undefined
let _UserRepo: any | undefined
let _TodoRepo: any | undefined

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
	_ShopTableRepo = _ShopTable.build(TableRepository)

	const _UserEntity = new Entity({
		name: 'User',
		schema: item({
			email: string().key().savedAs('pk').transform(prefix('USER#')),
			sk: string().key().transform(prefix('USER#')),
			passwordHash: string().optional()
		}),
		table: _ShopTable
	})
	_UserRepo = _UserEntity.build(EntityRepository)

	const _TodoEntity = new Entity({
		name: 'Todo',
		schema: item({
			user: string().key().savedAs('pk').transform(prefix('USER#')),
			id: string().key().savedAs('sk').transform(prefix('TODO#')),
			text: string().optional(),
			status: string().default('OUTSTANDING'),
			editable: string().optional(),
			notes: string().optional(),
			userName: string().optional(),
			date: string().optional(),
			GSI1pk: string().optional(),
			GSI1sk: string().optional()
		}),
		table: _ShopTable
	})
	_TodoRepo = _TodoEntity.build(EntityRepository)
} catch (error: any) {
	console.error('Failed to initialize DynamoDB connection:', error)
}

// Proxies to ensure we get a helpful error if the DB failed to initialize
export const ShopTable: any = new Proxy({} as any, {
	get(target, prop) {
		if (!_ShopTableRepo) {
			throw new Error('DynamoDB ShopTable is not initialized. Check your AWS credentials.')
		}
		return (_ShopTableRepo as any)[prop]
	}
})

export const User: any = new Proxy({} as any, {
	get(target, prop) {
		if (!_UserRepo) {
			throw new Error('DynamoDB User entity is not initialized. Check your AWS credentials.')
		}
		return (_UserRepo as any)[prop]
	}
})

export const Todo: any = new Proxy({} as any, {
	get(target, prop) {
		if (!_TodoRepo) {
			throw new Error('DynamoDB Todo entity is not initialized. Check your AWS credentials.')
		}
		return (_TodoRepo as any)[prop]
	}
})
