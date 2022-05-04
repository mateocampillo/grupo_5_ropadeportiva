const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Dentro de localhost:3000/users

router.get("/login", usersController.login);            //ruta para el login de usuarios

router.get("/register", usersController.register);      //ruta para el registro de nuevos usuarios
router.post("/register", usersController.add)

module.exports = router;