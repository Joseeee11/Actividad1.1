var express = require('express');
var router = express.Router();


var solicitanteControllers = require("../controllers/solicitante.c.js")

//GET para listar
router.get('/', function(req, res, next) {
  res.send(solicitanteControllers.listar());
});

module.exports = router;