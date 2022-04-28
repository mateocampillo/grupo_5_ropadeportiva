const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

//Entry point al localhost:3000
router.get("/", mainController.index);

module.exports = router;