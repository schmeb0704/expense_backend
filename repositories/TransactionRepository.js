class TransactionRepository {
  constructor(model) {
    this.model = model
  }

  async getAllTransactions() {
    return this.model.find({}).lean()
  }

  async createTransaction(data) {
    const transaction = new this.model(data)
    await transaction.save()
    return transaction
  }
}

module.exports = TransactionRepository
