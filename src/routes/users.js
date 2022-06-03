const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Dentro de localhost:3000/users

router.get("/login", usersController.loginGet);            //ruta para el login de usuarios
router.post("/login", usersController.loginPost);

router.get("/register", usersController.register);      //ruta para el registro de nuevos usuarios
router.post("/register", usersController.add)

router.get("/recover", usersController.recoverGet);         //ruta para el recover de la contraseña
router.patch("/recover", usersController.recoverPatch);

module.exports = router;