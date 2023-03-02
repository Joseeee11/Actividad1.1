//requerimientos
const databased = require("../dataBase/dataBase.js")

class reserva_equiposControllers {

    //GET esta funcion muestra los equipos reservados de la base de datos "dataBase"
    listar(){
    console.log('listando'); //listando
    return databased.database.reserva_equipo;
    };
    
//POST crear una reserva dentro de la BD, con un identificador (ID) único
crear(reserva_equipos){

  //verificar que contenga todas las determinadas propiedades
  if (!reserva_equipos.id || !reserva_equipos.Solicitante_responsable || !reserva_equipos.Fecha || !reserva_equipos.HoraI || !reserva_equipos.HoraF || !reserva_equipos.Motivo || !reserva_equipos.Personal_tecnico_requerido || !reserva_equipos.equipo_solicitados) {

    return ("No se agregó la reserva, se requiere: Solicitante responsable, id, Fecha con su hora de inicio y fin, un Motivo, Personal requerido y Equipo solicitado");

  }else{

    //recorrer cada reserva para verificar que ID no se repita, es decir sea un identificador único
    for (let i = 0; i < databased.database.reserva_equipo.length; i++) {
      if (reserva_equipos.id === databased.database.reserva_equipo[i].id){
        return (`No se agrego porque la reserva con el id: ${reserva_equipos.id}  ya existe`);
      };
    };

    console.log('se agregó'); 
    databased.database.reserva_equipo.push(reserva_equipos); //se agrega a la BD
    return ("RESERVA AGREGADA EXITOSAMENTE");
  };
};


};

module.exports = new reserva_equiposControllers();