var express = require('express');
var router = express.Router();


var reserva_equiposControllers = require("../controllers/reserva_equipos.c.js")

//GET para listar
router.get('/', function(req, res, next) {
  res.send(reserva_equiposControllers.listar());
});


// EL METODO POST PARA AGREGAR, OJITO
router.post('/', function(req, res, next){
  let reserva_equipos = req.body
  res.send(reserva_equiposControllers.crear(reserva_equipos));
})


module.exports = router;