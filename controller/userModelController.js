const usersModel = require("../model/usersModel.js");

// create a users
const createUser = async (req, res) => {
  console.log(req.body);

  const { email, name , password} = req.body;

  let user = await usersModel.findOne({ email });
  if (!user) {
    user = await new usersModel({
      name,
      email,
      password
    }).save();
  }
  console.log(user._id);

  res.status(200).send({
    success: true,
    message: "Loging successfully",
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password
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
