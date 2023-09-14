const couponModel = require("../model/couponModel");

const addCoupon = async (req, res) => {
  try {
    const coupon = await couponModel(req.body).save();
    res.status(201).send({
      success: true,
      message: "new Coupon created",
      coupon,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding the coupon.");
  }
};

const getCoupon = async (req, res) => {
  try {
    const coupon = await couponModel.find();

    res.send(coupon);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while fetching the find all coupon.");
  }
};

const deleteCoupon = async (req, res) => {
  try {
    const couponId = req.params.id;
    const deletedCoupon = await couponModel.findByIdAndDelete(couponId);

    if (!deletedCoupon) {
      return res.status(404).send("Coupon not found.");
    }

    res.send({
      success: true,
      message: "Coupon deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the coupon.");
  }
};

const updateCoupon = async (req, res) => {
  try {
    const couponId = req.params.id;
    const updateData = req.body;

    const updatedCoupon = await couponModel.findByIdAndUpdate(
      couponId,
      updateData,
      { new: true }
    );

    if (!updatedCoupon) {
      return res.status(404).send("Coupon not found.");
    }

    res.send({
      success: true,
      message: "Coupon updated successfully",
      updatedCoupon,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the coupon.");
  }
};

module.exports = {
  addCoupon,
  getCoupon,
  deleteCoupon,
  updateCoupon,
};
