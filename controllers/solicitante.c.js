//requerimientos
const databased = require("../dataBase/dataBase.js")

class solicitanteControllers {

    //GET esta funcion muestra el solicitante de la BD "dataBase"
    listar(){
    console.log('listar solicitantes');
    return databased.database.solicitante;
    };

};

module.exports = new solicitanteControllers();