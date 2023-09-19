const express = require("express");
const { createUserIP, getAllUserIP } = require("../controller/userTrafficController.js");
const router = express.Router();

router.post("/usersIp", createUserIP);
router.get("/usersIp", getAllUserIP);


module.exports = router;
