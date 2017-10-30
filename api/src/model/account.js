const mongoose = require('../lib/mongoose')
const Schema = mongoose.Schema

const AccountSchema = new Schema(
  {
    studentId: String,
    name: String
  },
  { collection: 'account' }
)

const Account = mongoose.model('account', AccountSchema)

module.exports = Account
