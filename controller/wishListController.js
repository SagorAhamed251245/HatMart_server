const wishListModel = require("../model/wishListModel.js");

const addWishList = async (req, res) => {
  try {
    const category = await new wishListModel(req.body).save();
    res.status(201).send({
      success: true,
      message: "new wishList created",
      category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding the category.");
  }
};
const getWishList = async (req, res) => {
  try {
    const category = await wishListModel.find();
    res.send(category);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the category.");
  }
};
const getWishListById = async (req, res) => {
  try {
    const id = req.params.id;
    const wishlist = await wishListModel.find({ _id: id });
    res.send(wishlist);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while fetching the get wishlist ById .");
  }
};
const getWishListForUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const wishList = await wishListModel.find({ userId: userId });
    res.send(wishList);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while fetching the get wishlist By userId .");
  }
};

module.exports = {
  getWishList,
  addWishList,
  getWishListById,
  getWishListForUser,
};
