const {
  addProduct,
  getAllProducts,
  getProductsBySearch 
} = require("../controller/productModelController.js");

const express = require("express");

const router = express.Router();

router.post("/product", addProduct);
router.get("/product", getAllProducts);
router.get("/product", getAllProducts);
router.get("/product/:text", getProductsBySearch )

module.exports = router;
