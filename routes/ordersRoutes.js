const express = require("express");
const {
  addOrder,
  getAllOrder,
  getOrderByCustomerId,
} = require("../controller/ordersModelController");
const router = express.Router();

router.post("/orders", addOrder);
router.get("/orders", getAllOrder);
router.get("/orders/:customerId", getOrderByCustomerId);

module.exports = router;
