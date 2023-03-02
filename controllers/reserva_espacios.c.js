//requerimientos
const databased = require("../dataBase/dataBase.js")

class reserva_espaciosControllers {

    //GET esta funcion muestra los espacios de la base de datos "dataBase"
    listar(){
    console.log('listar'); //avisar que va a listar
    return databased.database.reserva_espacio;
    };

  //POST crear una reserva dentro de la BD, con un identificador (ID) único
  crear(reserva_espacios){

    //verificar que contenga todas las determinadas propiedades
    if (!reserva_espacios.id || !reserva_espacios.Solicitante_responsable || !reserva_espacios.Fecha || !reserva_espacios.HoraI || !reserva_espacios.HoraF || !reserva_espacios.Motivo || !reserva_espacios.Personal_tecnico_requerido || !reserva_espacios.Espacios_solicitados) {

      return ("No se agregó la reserva, se requiere: Solicitante responsable, id, Fecha con su hora de inicio y fin, un Motivo, Personal requerido y Espacio solicitado");

    }else{

      //recorrer cada reserva para verificar que ID no se repita, es decir sea un identificador único
      for (let i = 0; i < databased.database.reserva_espacio.length; i++) {
        if (reserva_espacios.id === databased.database.reserva_espacio[i].id){
          return (`No se agrego porque la reserva con el id: ${reserva_espacios.id}  ya existe`);
        };
      };

      console.log('se agregó'); 
      databased.database.reserva_espacio.push(reserva_espacios); //se agrega a la BD
      return ("RESERVA AGREGADA EXITOSAMENTE");
    };
  };


};

module.exports = new reserva_espaciosControllers();