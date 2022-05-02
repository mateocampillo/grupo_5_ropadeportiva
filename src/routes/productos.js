const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

// Dentro de localhost:3000/productos
router.get("/detalle/:id", productosController.detalle);
router.get("/carrito", productosController.cart);
router.get("/editar", productosController.edit);


module.exports = router;