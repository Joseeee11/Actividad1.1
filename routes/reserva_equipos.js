var express = require('express');
var router = express.Router();


var reserva_equiposControllers = require("../controllers/reserva_equipos.c.js")

//GET para listar
router.get('/', function(req, res, next) {
  res.send(reserva_equiposControllers.listar());
});


module.exports = router;