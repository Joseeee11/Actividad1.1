var express = require('express');
var router = express.Router();

//importar controladores
var equipoControllers = require("../controllers/equipo.c.js")


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Actividad 1.1' });
  });
  


module.exports = router;