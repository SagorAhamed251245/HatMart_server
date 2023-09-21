const express = require("express");
const {
  getCoupon,
  addCoupon,
  updateCoupon,
  deleteCoupon,
  addExpiredCoupon,
} = require("../controller/couponModelController");

const router = express.Router();

router.get("/coupon", getCoupon);
router.post("/coupon", addCoupon);
router.post("/expiredCoupon", addExpiredCoupon);
router.patch("/coupon/:id", updateCoupon);
router.delete("/coupon/:id", deleteCoupon);

module.exports = router;
