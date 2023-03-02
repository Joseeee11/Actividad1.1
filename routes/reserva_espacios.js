var express = require('express');
var router = express.Router();


var reserva_espaciosControllers = require("../controllers/reserva_espacios.c.js")

//GET para listar
router.get('/', function(req, res, next) {
  res.send(reserva_espaciosControllers.listar());
});
  //mostrar por fecha
router.get('/:Fecha', function(req, res, next) {
  let fechaBuscar = req.params.Fecha;
  res.send(reserva_espaciosControllers.listar_Fecha(fechaBuscar));
});
  //mostrar por rango de fecha
router.get('/:FechaI/:FechaF', function(req, res, next) { //cuando recibamos 2 parametros en la url
  let FechaI = req.params.FechaI; //guardamos el paerametro de fecha inicial del rango
  let FechaF = req.params.FechaF; //guardamos el paerametro de fecha final del rango
  res.send(reserva_espaciosControllers.listar_FechaRango(FechaI, FechaF));
});

//DELETE, PARA ELIMINAR
router.delete('/', function(req, res, next){
  let reserva_espacios = req.body
  res.send(reserva_espaciosControllers.eliminar(reserva_espacios));
})


// EL METODO POST PARA AGREGAR
router.post('/', function(req, res, next){
  let reserva_espacios = req.body
  res.send(reserva_espaciosControllers.crear(reserva_espacios));
})


module.exports = router;