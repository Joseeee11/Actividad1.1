var express = require('express');
var router = express.Router();

//importar controladores
var espaciosControllers = require("../controllers/espacios.c.js")


//GET para listar
router.get('/', function(req, res, next) {
  res.send(espaciosControllers.listar());
});
  

module.exports = router;