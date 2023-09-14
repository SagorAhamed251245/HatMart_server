const express = require("express");
const {
  addWishList,
  getWishList,
  getWishListById,
  getWishListForUser,
} = require("../controller/wishListController");

const router = express.Router();

router.post("/wishList", addWishList);
router.get("/wishList", getWishList);
router.get("/wishListId/:id", getWishListById);
router.get("/wishListUserId/:userId", getWishListForUser);

module.exports = router;
