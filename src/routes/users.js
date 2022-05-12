const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const usersController = require("../controllers/usersController");

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

router.get("/login", usersController.login);            //ruta para el login de usuarios

router.get("/register", usersController.register);      //ruta para el registro de nuevos usuarios
router.post("/register", uploadFile.single("imgUser"), usersController.add)

router.get("/recover", usersController.recoverGet);
router.patch("/recover", usersController.recoverPatch);

module.exports = router;