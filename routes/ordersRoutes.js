const express = require("express");
const {
  addOrder,
  getAllOrder,
  getOrderByCustomerId,
  addMultiOrder,
} = require("../controller/ordersModelController");
const router = express.Router();

router.post("/orders", addOrder);
router.post("/orders/multi", addMultiOrder);
router.get("/orders", getAllOrder);
router.get("/orders/:customerId", getOrderByCustomerId);

module.exports = router;
