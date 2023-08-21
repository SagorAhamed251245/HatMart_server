const express = require("express");
const router = express.Router();
const {
  createReview,
  getAllReview,
  getSingleProductsReview,
  getSingleUserReview,
} = require("../controller/reviewsModelController");

router.post("/reviews", createReview);
router.get("/reviews", getAllReview);
router.get("/reviews/:productId", getSingleProductsReview);
router.get("/reviews/user/:email", getSingleUserReview);

module.exports = router;
