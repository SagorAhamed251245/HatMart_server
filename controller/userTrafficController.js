const userTrafficModel = require("../model/userTrafficModel.js");

const createUserIP = async (req, res) => {
  console.log(req.body);

  const { ip } = req.body;

  let userIp = await userTrafficModel.findOne({ ip });
  if (!userIp) {
    userIp = await new userTrafficModel(req.body).save();
  }
  console.log(userIp._id);
};

// get all users
const getAllUserIP = async (req, res) => {
  try {
    const allUsersIp = await userTrafficModel.find();
    res.status(201).send(allUsersIp);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while get usersIP.");
  }
};

module.exports = {
  createUserIP,

  getAllUserIP,
};
