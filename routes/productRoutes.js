const {
  addProduct,
  getAllProducts,
  getProductsBySearch,
  getProductById,
  addMultiProduct,
} = require("../controller/productModelController.js");

const express = require("express");

const router = express.Router();

router.post("/product", addProduct);
router.post("/multiProduct", addMultiProduct);
router.get("/product", getAllProducts);
router.get("/product/:id", getProductById);
router.get("/productSearch/:text", getProductsBySearch);

module.exports = router;
