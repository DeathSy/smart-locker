const { getAllAccount, addAcctountIfNotExists } = require('../controllers/accountController')

const account = async (doc, { studentId }) => {
  const accounts = await getAllAccount()
  return accounts.filter(account => account.studentId === studentId)[0]
}

const addAccount = async (doc, { studentId, name }) => {
  const account = await addAcctountIfNotExists(name, studentId)
  return account
}

module.exports = {
  account,
  addAccount
}
