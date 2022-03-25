// Require AWS SDK and instantiate DocumentClient
import { Table, Entity } from 'dynamodb-toolbox'
import dotenv from 'dotenv'
import AWS from 'aws-sdk'
dotenv.config({ path: '../../.env' })

AWS.config.update({
	region: 'eu-west-1',
	accessKeyId: process.env.AWS_KEY,
	secretAccessKey: process.env.AWS_SECRET
})

const DocumentClient = new AWS.DynamoDB.DocumentClient()

// Instantiate a table
const ShopTable = new Table({
	name: 'shop',
	partitionKey: 'pk',
	sortKey: 'sk',
	indexes: {
		GSI1: { partitionKey: 'GSI1pk', sortKey: 'GSI1sk' }
	},
	DocumentClient
})
/*
const Product = new Entity({

  name: 'Item',
  attributes: {
    pk: { partitionKey: true, prefix: '' },
    sk: { sortKey: true, prefix: '' },
    // forming a sort key from multiple attributes
    user: ['sk', 0, { type: 'string' }],
    id: ['sk', 1],
  },
  table: ShopTable
})
*/

const User = new Entity({
	name: 'User',
	attributes: {
		email: { partitionKey: true, prefix: 'USER#' },
		sk: { sortKey: true, prefix: 'USER#' },
		passwordHash: { type: 'string' }
	},
	table: ShopTable
})

const Todo = new Entity({
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
	table: ShopTable
})

// 'Secondary index for date sorted todos'

export { Todo, User, ShopTable }

/*
const Order = new Entity({
    name:'Order',
    attributes:{
    }
    // user#id#product#id
})

const Customer = new Entity({
    name:'Customer',
    attributes:''
})

const User = new Entity({
    name:"User",
    attributes:{

    }
})

const OrderItems = new Entity({
    name:"OrderItems",
    attributes:{

    }
})*/

//export { Todo, User, Product, Order, OrderItems, Customer, ShopTable }
