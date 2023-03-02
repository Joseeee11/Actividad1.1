var express = require('express');
var router = express.Router();

//importar controladores
var equipoControllers = require("../controllers/equipo.c.js")


//GET para listar
router.get('/', function(req, res, next) {
  res.send(equipoControllers.listar());
});
  


module.exports = router;