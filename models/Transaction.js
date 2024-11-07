const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
    },
    transactionType: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('transaction', TransactionSchema)
