const {
  addProduct,
  getAllProducts,
} = require("../controller/productModelController");

const express = require("express");

const router = express.Router();

router.post("/product", addProduct);
router.get("/product", getAllProducts);

module.exports = router;
