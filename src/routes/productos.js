const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

// Dentro de localhost:3000/productos
router.get("/detalle", productosController.detalle);
router.get("/carrito", productosController.cart);

module.exports = router;