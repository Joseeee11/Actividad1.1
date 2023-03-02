var express = require('express');
var router = express.Router();


var reserva_espaciosControllers = require("../controllers/reserva_espacios.c.js")

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Actividad 1.1' });
});


module.exports = router;