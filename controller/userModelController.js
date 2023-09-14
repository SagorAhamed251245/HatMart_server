const mongoose = require("mongoose");
const usersModel = require("../model/usersModel.js");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

// create a users
const createUser = async (req, res) => {
  console.log(req.body);

  const { email, name, password } = req.body;

  let user = await usersModel.findOne({ email });
  if (!user) {
    user = await new usersModel(req.body).save();
  }
  console.log(user._id);
  // Create a JWT token with the "role" claim
  const token = jwt.sign(
    { _id: user._id, role: user.role },
    process.env.JWT_KEY,
    {
      expiresIn: "1h",
    }
  );

  const jwtCookie = cookie.serialize("jwtToken", token, {
    httpOnly: true,
    maxAge: 360000,
    sameSite: "strict",
  });

  res.setHeader("Set-Cookie", jwtCookie);
  res.status(200).send({
    success: true,
    message: "Loging successfully",
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    },
  });
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

module.exports = {
  createUser,
  getSingleUser,
  getAllUser,
  editUser,
  getSingleUserById,
};
