const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// Routes
router.post("/register", registerUser); // Register a new user
router.post("/login", loginUser); // Login user

module.exports = router;
