const transactionsModel = require("../model/transactionModel.js");

const addTransaction = async (req, res) => {
  try {
    const transaction = await new transactionsModel(req.body).save();
    res.status(201).send({
      success: true,
      message: "new transaction created",
      transaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding the transaction.");
  }
};
const getAllTransaction = async (req, res) => {
  try {
    const transaction = await transactionsModel.find();
    res.send(transaction);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while fetching the getAllTransaction .");
  }
};

const getTransactionById = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await transactionsModel.find({ transactionId: id });
    res.send(transaction);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while fetching the getTransactionById .");
  }
};

const getTransactionForUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const transaction = await transactionsModel.find({ userId: userId });
    res.send(transaction);
  } catch (error) {}
};
module.exports = {
  addTransaction,
  getAllTransaction,
  getTransactionById,
  getTransactionForUser,
};
