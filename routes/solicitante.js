var express = require('express');
var router = express.Router();


var solicitanteControllers = require("../controllers/solicitante.c.js")

//GET para listar
router.get('/', function(req, res, next) {
  res.send(solicitanteControllers.listar());
});


// EL METODO POST PARA AGREGAR, OJITO
router.post('/', function(req, res, next){
  let solicitantes = req.body
  res.send(solicitanteControllers.crear(solicitantes));
})


module.exports = router;