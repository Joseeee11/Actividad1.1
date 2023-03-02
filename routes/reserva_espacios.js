var express = require('express');
var router = express.Router();


var reserva_espaciosControllers = require("../controllers/reserva_espacios.c.js")

//GET para listar
router.get('/', function(req, res, next) {
  res.send(reserva_espaciosControllers.listar());
});


module.exports = router;