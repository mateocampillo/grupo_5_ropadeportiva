const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const authLogin = require("../middlewares/authLogin")
const multer = require("multer");
const path = require("path");
const loginUserValidation = require('../backEndValidations/loginUserValidation');
const registerUserValidation = require('../backEndValidations/RegisterUserValidation');
const recoverUserValidation = require('../backEndValidations/recoverUserValidation');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname + "../../../public/images/Users"));
    },
    filename: (req, file, cb) => {
        if(file.originalname.includes(".jpg")){
            cb(null, `${Date.now()}_UserImg_${path.extname(file.originalname)}`);
        } else {
            cb("error: No se ha ingresado una imagen .jpg", "");
        }
    }
});

let uploadFile = multer({storage: storage});


// Dentro de localhost:3000/users

router.get("/login", usersController.loginGet);            //ruta para el login de usuarios
router.post("/login", loginUserValidation, usersController.loginPost);

router.get("/register", usersController.register);      //ruta para el registro de nuevos usuarios
router.post("/register", registerUserValidation, usersController.add)

router.get("/recover", usersController.recoverGet);         //ruta para el recover de la contraseña
router.patch("/recover", recoverUserValidation, usersController.recoverPatch);

router.get("/perfil", authLogin, usersController.perfil);          //ruta para el perfil de cada usuario
router.patch("/perfil", uploadFile.single("imgUser"), usersController.perfilImg)

module.exports = router;