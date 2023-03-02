//requerimientos
const databased = require("../dataBase/dataBase.js")

class personalControllers {

    // GET esta funcion muestra el personal de la BD "dataBase"
    listar(){
    console.log('listar personal');
    return databased.database.personal;
    };


};

module.exports = new personalControllers();