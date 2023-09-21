const mongoose = require("mongoose");
const usersModel = require("../model/usersModel.js");

// create a users
const createUser = async (req, res) => {
  console.log(req.body);

  const { email } = req.body;

  let user = await usersModel.findOne({ email });
  if (!user) {
    user = await new usersModel(req.body).save();
  }
  console.log(user._id);
};

// get all users
const getAllUser = async (req, res) => {
  try {
    const allUsers = await usersModel.find();
    res.status(201).send(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while get users.");
  }
};

const getSingleUser = async (req, res) => {
  try {
    const userEmail = req.params.email;

    // Validate the email address format (optional)
    if (!isValidEmail(userEmail)) {
      return res.status(400).send("Invalid email address");
    }

    const user = await usersModel.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching a user.");
  }
};

const getSingleUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!isValidEmail(userEmail)) {
      return res.status(400).send("Invalid userId");
    }

    const user = await usersModel.findOne({ _id: userId });

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching a user.");
  }
};

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const editUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    const user = await usersModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User successfully updated",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the user.",
    });
  }
};

// edit user role
const changeUserRole = async (req, res) => {
  try {
    const id = req.params.id;
    const userRole = req.body.role;
    console.log(id, userRole);
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    await usersModel.findByIdAndUpdate(id, {
      $set: { role: userRole },
    });

    res.status(200).json({
      success: true,
      message: `User role successfully updated to ${role}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the user role.",
    });
  }
};

module.exports = {
  createUser,
  getSingleUser,
  getAllUser,
  editUser,
  getSingleUserById,
  changeUserRole,
};
