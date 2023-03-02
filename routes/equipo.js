var express = require('express');
var router = express.Router();

//importar controladores
var equipoControllers = require("../controllers/equipo.c.js")


//GET para listar
router.get('/', function(req, res, next) {
  res.send(equipoControllers.listar());
});

//DELETE, PARA ELIMINAR
router.delete('/', function(req, res, next){
  let equipo = req.body
  res.send(equipoControllers.eliminar(equipo));
})
  
// EL METODO POST PARA AGREGAR
router.post('/', function(req, res, next){
  let equipo = req.body
  res.send(equipoControllers.crear(equipo));
})

module.exports = router;