const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);      //Entry point al localhost:3000

module.exports = router;