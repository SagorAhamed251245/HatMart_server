const {
  addProduct,
  getAllProducts,
  getProductsBySearch,
  getProductById,
  addMultiProduct,
  updateProduct,
} = require("../controller/productModelController.js");

const express = require("express");
const router = express.Router();

router.post("/product", addProduct);
router.post("/multiProduct", addMultiProduct);
router.get("/product", getAllProducts);
router.get("/productId/:id", getProductById);
router.get("/productSearch/:text", getProductsBySearch);
router.patch("/updateProduct/:id", updateProduct);

module.exports = router;
