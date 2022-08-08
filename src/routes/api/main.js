const express = require("express");
const router = express.Router();
const cors = require('cors');
const apiMainController = require("../../controllers/api/apiMainController");


// Dentro de localhost:3000/api/main

router.get('/ventas', cors(), apiMainController.list);

module.exports = router;