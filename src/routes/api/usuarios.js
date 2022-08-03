const express = require("express");
const router = express.Router();
const cors = require('cors');
const apiUsuariosController = require("../../controllers/api/apiUsuariosController");


// Dentro de localhost:3000/api/productos

router.get('/', cors(), apiUsuariosController.list);
router.get('/:id', cors(), apiUsuariosController.detail);

module.exports = router;