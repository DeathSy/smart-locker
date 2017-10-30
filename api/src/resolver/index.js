const { account, addAccount } = require('./account.resolver')

module.exports = {
  Query: {
    account
  },
  Mutation: {
    addAccount
  }
}
