var express = require('express');
var router = express.Router();


var reserva_espaciosControllers = require("../controllers/reserva_espacios.c.js")

//GET para listar
router.get('/', function(req, res, next) {
  res.send(reserva_espaciosControllers.listar());
});


// EL METODO POST PARA AGREGAR, OJITO
router.post('/', function(req, res, next){
  let reserva_espacios = req.body
  res.send(reserva_espaciosControllers.crear(reserva_espacios));
})


module.exports = router;