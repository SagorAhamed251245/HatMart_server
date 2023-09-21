const {
  addProduct,
  getAllProducts,
  getProductsBySearch,
  getProductById,
  addMultiProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productModelController.js");

const express = require("express");
const router = express.Router();

router.post("/product", addProduct);
router.post("/multiProduct", addMultiProduct);
router.get("/product", getAllProducts);
router.get("/productId/:id", getProductById);
router.get("/productSearch/:text", getProductsBySearch);
router.patch("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id",deleteProduct);

module.exports = router;
