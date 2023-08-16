const {
  getCategory,
  addCategory,
} = require("../controller/categoriesModelController.js");
const express = require("express");
const router = express.Router();

router.post("/category", addCategory);
router.get("/category", getCategory);

module.exports = router;
