const CategoriesModel = require("../model/categoriesModel.js");

const addCategory = async (req, res) => {
  try {
    // const { category, icon, sub_category } = req.body;
    const category = await new CategoriesModel(req.body).save();
    res.status(201).send({
      success: true,
      message: "new category created",
      category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding the category.");
  }
};
const getCategory = async (req, res) => {
  try {
    const category = await CategoriesModel.find();
    res.send(category);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the category.");
  }
};

module.exports = {
  addCategory,
  getCategory,
};
