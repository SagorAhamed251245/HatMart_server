const express = require("express");

const {
  addTransaction,
  getAllTransaction,
  getTransactionById,
  getTransactionForUser,
} = require("../controller/transactionModelController.js");
const router = express.Router();

router.post("/transaction", addTransaction);
router.get("/transaction", getAllTransaction);
router.get("/transaction/:id", getTransactionById);
router.get("/userTransaction/:userId", getTransactionForUser);

module.exports = router;
