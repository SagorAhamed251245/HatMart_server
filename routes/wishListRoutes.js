const {
  addWishList,
  getWishList,
  getWishListById,
  getWishListForUser,
} = require("../controller/wishListController");

addWishList;

const router = express.Router();

router.post("/wishList", addWishList);
router.get("/wishList", getWishList);
router.get("/wishListId/:id", getWishListById);
router.patch("/wishListUserId/:userId", getWishListForUser);

module.exports = router;
