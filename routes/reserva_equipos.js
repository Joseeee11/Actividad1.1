var express = require('express');
var router = express.Router();


var reserva_equiposControllers = require("../controllers/reserva_equipos.c.js")

//GET para listar
router.get('/', function(req, res, next) {
  res.send(reserva_equiposControllers.listar());
});
  //listar por fecha
router.get('/:Fecha', function(req, res, next) {
  let fechaBuscar = req.params.Fecha; //para guardar parametro "Fecha"
  res.send(reserva_equiposControllers.listar_Fecha(fechaBuscar));
});
  //listar por un rango especifico de fechas
router.get('/:FechaI/:FechaF', function(req, res, next) { //cuando recibamos 2 parametros en la url
  let FechaI = req.params.FechaI; //guardamos el paerametro de fecha inicial del rango
  let FechaF = req.params.FechaF; //guardamos el paerametro de fecha final del rango
  res.send(reserva_equiposControllers.listar_FechaRango(FechaI, FechaF));
});

//DELETE, PARA ELIMINAR
router.delete('/', function(req, res, next){
  let reserva_equipos = req.body;
  res.send(reserva_equiposControllers.eliminar(reserva_equipos));
})

// EL METODO POST PARA AGREGAR
router.post('/', function(req, res, next){
  let reserva_equipos = req.body
  res.send(reserva_equiposControllers.crear(reserva_equipos));
})


module.exports = router;