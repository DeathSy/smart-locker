require('dotenv')
const path = require('path')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

const resolvers = require('./src/resolver')
const typeDefs = fs.readFileSync('./src/schema.gql', 'utf8')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`> express server is running on port ${port}`)
})
