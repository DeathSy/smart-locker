require('dotenv')
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, { useMongoClient: true })
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', () => {
  console.log('---- Failed connected to mongoDB server')
})

db.once('open', () => {
  console.log('---- Success connected to mongoDB server')
})

module.exports = mongoose
