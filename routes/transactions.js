const express = require('express')
const router = express.Router()
const TransactionRepository = require('../repositories/TransactionRepository')
const Transaction = require('../models/Transaction')

const transactionRepository = new TransactionRepository(Transaction)

router.get('/', async (req, res) => {
  try {
    const transactions = await transactionRepository.getAllTransactions()
    return res.send(transactions)
  } catch (error) {
    console.error('something went wrong', error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newTransaction = await transactionRepository.createTransaction(
      req.body
    )

    return res.status(200).send(newTransaction)
  } catch (error) {
    console.error('something went wrong', error)
  }
})

module.exports = router
