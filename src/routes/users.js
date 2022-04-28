const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Dentro de localhost:3000/users
router.get("/login", usersController.login);
router.get("/register", usersController.register);

module.exports = router;