const express = require("express");
const {
  getAllBanner,
  getBannerByType,
  addBanner,
} = require("../controller/bannerModelController.js");

const router = express.Router();

router.get("/allBanner", getAllBanner);
router.get("/allBanner/:type", getBannerByType);
router.post("/addBanner", addBanner);

module.exports = router;
