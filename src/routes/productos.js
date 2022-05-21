const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productosController = require("../controllers/productosController");

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname + "../../../public/images/ProductDetail"));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

let uploadFile = multer({storage: storage});

// Dentro de localhost:3000/productos
router.get("/", productosController.list);                  //ruta que muestra el listado total de productos.
router.get("/detalle/:id", productosController.detalle);    //ruta que muestra en detalle cada producto segun el id que se la pasa en la ruta.

router.get("/carrito", productosController.cart);           //ruta que muestra el carrito.

router.get("/:id/edit", productosController.edit);        //ruta del form para editar productos en la base de datos.
router.put("/:id", uploadFile.array("imgNuevoImages"), productosController.save);          //endpoint donde pega el form de editar productos.

router.get("/agregar", productosController.add);            //ruta del form para agregar productos a la base de datos.
router.post("/", uploadFile.array("imgAddimage"), productosController.added);        //endpoint donde pega el form de agregar productos.

router.delete("/:id", productosController.delete);

module.exports = router;