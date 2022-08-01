const express = require("express");
const router = express.Router();
const path = require("path");
const apiProductosController = require("../../controllers/api/apiProductosController");


// Dentro de localhost:3000/api/productos

router.get('/', apiProductosController.list);
router.get('/:id', apiProductosController.detail);

module.exports = router;