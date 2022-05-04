const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

// Dentro de localhost:3000/productos
router.get("/detalle/:id", productosController.detalle);    //ruta que muestra en detalle cada producto segun el id que se la pasa en la ruta.

router.get("/carrito", productosController.cart);           //ruta que muestra el carrito.

router.get("/editar/:id", productosController.edit);        //ruta del form para editar productos en la base de datos.
router.put("/guardar", productosController.save);          //endpoint donde pega el form de editar productos.

router.get("/agregar", productosController.add);            //ruta del form para agregar productos a la base de datos.
router.post("/agregado", productosController.added);        //endpoint donde pega el form de agregar productos.


module.exports = router;