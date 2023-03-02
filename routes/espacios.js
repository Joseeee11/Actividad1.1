var express = require('express');
var router = express.Router();

//importar controladores
var espaciosControllers = require("../controllers/espacios.c.js")


//GET para listar
router.get('/', function(req, res, next) {
  res.send(espaciosControllers.listar());
});
  
// EL METODO POST PARA AGREGAR, OJITO
router.post('/', function(req, res, next){
  let espacios = req.body
  res.send(espaciosControllers.crear(espacios));
})

// METODO PUT, PARA EDITAR 
router.put('/', (req, res, next) => { //C VA A BUSCAR POR EL URL
  let espacios = req.body;
  console.log(espacios);
  res.send(espaciosControllers.editar(espacios));
  
});


module.exports = router;