const reviewsModel = require("../model/reviewsModel");

// create a review for a user
const createReview = async (req, res) => {
  try {
    const review = await reviewsModel(req.body).save();
    res.status(201).send({
      success: true,
      message: "new review created",
      review,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating review.");
  }
};

// get review for a single product by product it
const getSingleProductsReview = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productReviews = await reviewsModel.findOne({
      productId: productId,
    });
    res.status(201).send({
      success: true,
      productReviews,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while get product review.");
  }
};

// get all review
const getAllReview = async (req, res) => {
  try {
    const allReview = await reviewsModel.find();
    res.status(201).send({
      success: true,
      allReview,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while get all review.");
  }
};

// get all review for a single user
const getSingleUserReview = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const userReview = await reviewsModel.find({
      customer_email: userEmail,
    });
    res.status(201).send({
      success: true,
      userReview,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while get all review.");
  }
};

module.exports = {
  createReview,
  getSingleProductsReview,
  getAllReview,
  getSingleUserReview,
};
