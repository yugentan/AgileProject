const express = require("express");
const router = express.Router();
const { signUp } = require("../controller/userController");

router.route("/user/signup").post(signUp);
module.exports = router;
