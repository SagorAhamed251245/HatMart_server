const express = require("express");
const {
  createUser,
  getAllUser,
  getSingleUser,
} = require("../controller/userModelController");
const router = express.Router();

router.post("/users", createUser);
router.get("/users", getAllUser);
router.get("/user/:email", getSingleUser);

module.exports = router;
