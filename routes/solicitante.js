var express = require('express');
var router = express.Router();


//importar controladores OJO
var solicitanteControllers = require("../controllers/solicitante.c.js")

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Actividad 1.1' });
});


module.exports = router;