const bannerModel = require("../model/bannerModel.js");

const addBanner = async (req, res) => {
  try {
    const banner = await bannerModel(req.body).save();
    res.status(201).send({
      success: true,
      message: "new Banner created",
      banner,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding the banner.");
  }
};

const getAllBanner = async (req, res) => {
  try {
    const banner = await bannerModel.find();

    res.send(banner);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while fetching the find all banner.");
  }
};

const getBannerByType = async (req, res) => {
  const type = req.params.type;
  try {
    const banner = await bannerModel.find({ type: type });
    res.send(banner);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while fetching the find by type banner.");
  }
};

module.exports = {
  getAllBanner,
  getBannerByType,
  addBanner,
};
