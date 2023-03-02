//requerimientos
const databased = require("../dataBase/dataBase.js")

class reserva_espaciosControllers {

    //GET esta funcion muestra los espacios de la base de datos "dataBase"
    listar(){
    console.log('listar'); //avisar que va a listar
    return databased.database.reserva_espacio;
    }

};

module.exports = new reserva_espaciosControllers();