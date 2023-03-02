//requerimientos
const e = require('express');
const databased = require("../dataBase/dataBase.js")


//controlador de equipo
class equipoControllers {
    // GET esta funcion muestra los espacios de la BD "dataBase"
    listar(){
        console.log('se esta listando'); //para saber que listar
        return databased.database.equipos; //retornamos los equipos
    };

}

module.exports = new equipoControllers();
