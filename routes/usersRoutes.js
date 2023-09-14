const express = require("express");
const {
  createUser,
  getAllUser,
  getSingleUser,
  editUser,
} = require("../controller/userModelController");
const verifyAdmin = require("../middleware/verifyAdmin");
const router = express.Router();

router.post("/users", createUser);
router.get("/users", getAllUser);
router.get("/user/:email", getSingleUser);
router.patch("/updateUser/:id", editUser);
router.get("/userId/:id", editUser);

module.exports = router;
