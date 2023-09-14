const express = require("express");
const {
  getCoupon,
  addCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponModelController");

const router = express.Router();

router.get("/coupon", getCoupon);
router.post("/addCoupon", addCoupon);
router.patch("/coupon/:id", updateCoupon);
router.delete("/coupon/:id", deleteCoupon);

module.exports = router;
