const express = require("express");
const { submitUser } = require("../Controllers/userController");

const router = express.Router();

router.post("/submit", submitUser);

module.exports = router;