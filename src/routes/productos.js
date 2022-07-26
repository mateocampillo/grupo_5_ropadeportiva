const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productosController = require("../controllers/productosController");
const authLogin = require('../middlewares/authLogin');
const authAdmin = require('../middlewares/authAdmin');
const addedProductValidation = require('../backEndValidations/addedProductValidation');
const editProductValidation = require('../backEndValidations/editProductValidation');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname + "../../../public/images/ProductDetail"));
    },
    filename: (req, file, cb) => {
        if(file.originalname.includes(".jpg")){
            cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
        } else {
            cb("error: No se ha ingresado una imagen .jpg", "");
        }
    }
});

let uploadFile = multer({storage: storage});

// Dentro de localhost:3000/productos
router.get("/", productosController.list);                  //ruta que muestra el listado total de productos.
router.get("/detalle/:id", productosController.detalle);    //ruta que muestra en detalle cada producto segun el id que se la pasa en la ruta.

router.get("/carrito", authLogin, productosController.cart);        //ruta que muestra el carrito.
router.post('/carrito', productosController.sold);                  //ruta que maneja la venta al finalizar compra en el carrito

router.get("/edit/:id", authAdmin, productosController.edit);        //ruta del form para editar productos en la base de datos.
router.put("/edit/:id", uploadFile.array("imgNuevoImages"), editProductValidation, productosController.save);          //endpoint donde pega el form de editar productos.

router.get("/agregar", authAdmin, productosController.add);            //ruta del form para agregar productos a la base de datos.
router.post("/agregar", uploadFile.array("imgAddimage"), addedProductValidation, productosController.added);        //endpoint donde pega el form de agregar productos.

router.delete("/:id", productosController.delete);          //ruta donde pega el formulario de borrar productos, se accede mediante la vista de admin

module.exports = router;