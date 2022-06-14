const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const authAdmin = require("../middlewares/authAdmin");
const authLogin = require("../middlewares/authLogin");

router.get("/", mainController.index);      //Entry point al localhost:3000
router.get("/admin", authAdmin, mainController.admin);         //Vista de admin
router.get('/cookies', authLogin, mainController.cookies)      //Limpiar cookies de sesion

module.exports = router;