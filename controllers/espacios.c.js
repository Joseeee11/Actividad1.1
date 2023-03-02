//requerimientos
const e = require('express');
const databased = require("../dataBase/dataBase.js")

//controlador
class espaciosControllers {
    // GET esta funcion muestra los espacios de la BD "dataBase"
    listar(){
        console.log('se esta listando'); //para saber que va a listar
        return databased.database.espacio;
    };
    
};

module.exports = new espaciosControllers();