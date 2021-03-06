import dotenv from 'dotenv'
import AWS from 'aws-sdk'
dotenv.config({ path: '../../.env' })

AWS.config.update({
	region: 'eu-west-1',
	accessKeyId: process.env.AWS_KEY,
	secretAccessKey: process.env.AWS_SECRET
})

// Create the DynamoDB service object
const client = new AWS.DynamoDB({ apiVersion: '2012-08-10' })
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
const params = {
	AttributeDefinitions: [
		{
			AttributeName: 'pk',
			AttributeType: 'S'
		},
		{
			AttributeName: 'sk',
			AttributeType: 'S'
		},
		{ AttributeName: 'GSI1pk', AttributeType: 'S' },
		{ AttributeName: 'GSI1sk', AttributeType: 'S' }
	],
	KeySchema: [
		{
			AttributeName: 'pk',
			KeyType: 'HASH'
		},
		{
			AttributeName: 'sk',
			KeyType: 'RANGE'
		}
	],
	ProvisionedThroughput: {
		ReadCapacityUnits: 1,
		WriteCapacityUnits: 1
	},
	GlobalSecondaryIndexes: [
		{
			IndexName: 'GSI1',
			KeySchema: [
				{ AttributeName: 'GSI1pk', KeyType: 'HASH' },
				{ AttributeName: 'GSI1sk', KeyType: 'RANGE' }
			],
			Projection: {
				ProjectionType: 'ALL'
			},
			ProvisionedThroughput: {
				ReadCapacityUnits: 1,
				WriteCapacityUnits: 1
			}
		}
		/*
    {
      IndexName: 'GSI2',
      KeySchema: [
        { AttributeName: 'GSI2pk', KeyType: 'HASH' },
        { AttributeName: 'GSI2sk', KeyType: 'RANGE' }
      ],
      Projection: {
        ProjectionType: 'ALL'
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      }
    },
    {
      IndexName: 'GSI3',
      KeySchema: [
        { AttributeName: 'GSI3pk', KeyType: 'HASH' },
        { AttributeName: 'GSI3sk', KeyType: 'RANGE' }
      ],
      Projection: {
        ProjectionType: 'ALL'
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
      }
    }*/
	],
	TableName: 'shop'
}

// Call DynamoDB to create the table
client.createTable(params, (err, data) => {
	if (err) {
		console.log('Error', err)
	} else {
		console.log('Table Created', data)
	}
})
