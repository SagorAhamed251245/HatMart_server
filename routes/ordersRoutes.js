const express = require("express");
const {
  addOrder,
  getAllOrder,
  getOrderByCustomerId,
  addMultiOrder,
  getOrderByTransactionId,
  updateOrderStatus,
} = require("../controller/ordersModelController");
const router = express.Router();

router.post("/orders", addOrder);
router.post("/orders/multi", addMultiOrder);
router.get("/orders", getAllOrder);
router.get("/ordersCustomerId/:customerId", getOrderByCustomerId);
router.get("/ordersTransactionId/:transactionId", getOrderByTransactionId);
router.patch("/updateOrderStatus/:id", updateOrderStatus);

module.exports = router;
