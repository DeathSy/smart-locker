const account = require('../model/account')

const getAllAccount = async () => {
  try {
    const result = await account.find()
    return result
  } catch (err) {
    throw new Error(err)
  }
}

const addAcctountIfNotExists = async (name, studentId) => {
  console.log(name)
  try {
    const query = { studentId }
    const update = { studentId, name }
    const options = { upsert: true, new: true, setDefaultsOnInsert: true }
    const result = await account.findOneAndUpdate(query, update, options)
    return result
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getAllAccount,
  addAcctountIfNotExists
}
