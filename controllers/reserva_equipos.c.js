//requerimientos
const databased = require("../dataBase/dataBase.js")

class reserva_equiposControllers {

    //GET esta funcion muestra los equipos reservados de la base de datos "dataBase"
    listar(){
    console.log('listando'); //listando
    return databased.database.reserva_equipo;
    };

};

module.exports = new reserva_equiposControllers();