const express = require("express");
const router = express.Router();
const apiUsuariosController = require("../../controllers/api/apiUsuariosController");


// Dentro de localhost:3000/api/productos

router.get('/', apiUsuariosController.list);
router.get('/:id', apiUsuariosController.detail);

module.exports = router;