const ProductModel = require("../model/productModel.js");

const addProduct = async (req, res) => {
  try {
    const {
      title,
      details,
      packagingDelivery,
      warnings,
      price,
      category,
      sub_category,
      image,
      images,
      stock,
      discount_percent,
      unit,
    } = req.body;

    const product = await new ProductModel(req.body).save();
    res.status(201).send({
      success: true,
      message: "new product created",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding the product.");
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();

    res.send(products); // Use 'products' instead of 'randomProducts'
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the products.");
  }
};
module.exports = {
  addProduct,
  getAllProducts,
};
