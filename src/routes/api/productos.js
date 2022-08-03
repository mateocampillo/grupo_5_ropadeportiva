const express = require("express");
const router = express.Router();
const cors = require('cors');
const apiProductosController = require("../../controllers/api/apiProductosController");


// Dentro de localhost:3000/api/productos

router.get('/', cors(), apiProductosController.list);
router.get('/:id', cors(), apiProductosController.detail);

module.exports = router;