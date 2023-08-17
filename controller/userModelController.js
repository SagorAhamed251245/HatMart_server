const usersModel = require("../model/usersModel");

// create a users
const createUser = async (req, res) => {
  try {
    const user = await new usersModel(req.body).save();
    res.status(201).send({
      success: true,
      message: "new user created",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating user.");
  }
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

// get a user by Email
const getSingleUser = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const user = await usersModel.findOne({ email: userEmail });
    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while get a user.");
  }
};

module.exports = { createUser, getSingleUser, getAllUser };
