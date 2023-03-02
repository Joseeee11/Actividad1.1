var express = require('express');
var router = express.Router();

var personalControllers = require("../controllers/personal.c.js")

//GET para listar
router.get('/', function(req, res, next) {
  res.send(personalControllers.listar());
});

module.exports = router;