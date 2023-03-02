var express = require('express');
var router = express.Router();

var personalControllers = require("../controllers/personal.c.js")

//GET para listar
router.get('/', function(req, res, next) {
  res.send(personalControllers.listar());
});


// EL METODO POST PARA AGREGAR, OJITO
router.post('/', function(req, res, next){
  let personalc = req.body
  res.send(personalControllers.crear(personalc));
})


module.exports = router;