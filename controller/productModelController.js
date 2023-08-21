const productModel = require("../model/productModel.js");

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

    const product = await new productModel(req.body).save();
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
    const products = await productModel.find();

    res.send(products); // Use 'products' instead of 'randomProducts'
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the products.");
  }
};

const getProductsBySearch = async (req, res) => {
  const text = req.params.text;
  try {
    const products = await productModel
      .find(
        { $text: { $search: text } },
        { score: { $meta: "textScore" } } // Add textScore to sort by relevance
      )
      .sort({ score: { $meta: "textScore" } }); // Sort by relevance
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the products.");
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productModel.findById({ _id: id });
    res.send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the products.");
  }
};
module.exports = {
  addProduct,
  getAllProducts,
  getProductsBySearch,
  getProductById
};
