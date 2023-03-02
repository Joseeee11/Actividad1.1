//requerimientos
const databased = require("../dataBase/dataBase.js")

class reserva_equiposControllers {

    //GET esta funcion muestra los equipos reservados de la base de datos "dataBase"
    listar(){
        console.log('listando'); //listando
        return databased.database.reserva_equipo;
    };

    //GET esta funcion muestra los equipos reservados por una fecha específica
    listar_Fecha(fechaBuscar){
        
        console.log('listando por fecha');
        console.log(fechaBuscar); //mostramos la fecha a buscar
        let resultado = []; //declaramos array donde guardaremos los resultados que concuerden con la fecha solicitada
    
        //Recorremos todos los elementos de "reserva_equipo" y los que cumplan con la condición se agregarán en el array resultado.
        for (let i = 0; i < databased.database.reserva_equipo.length; i++) {
          if (fechaBuscar === databased.database.reserva_equipo[i].Fecha){
            resultado.push(databased.database.reserva_equipo[i]); //agregamos a resultado
          };
        };
    
        //Si resultado no contiene ningun elemento, significa que no se encontraron reservas con esa fecha:
        if (resultado.length === 0) {
          return (`No hay reservas durante esta fecha: ${fechaBuscar}`);
        };
    
        return resultado; //mostramos resultado
    };


    //DELETE una funcion para eliminar determinada reserva por medio de in identificador (id)
    eliminar(reserva_equipos){

        //Verificar que haya un id
        if (!reserva_equipos.id) {
            return ('Debes ingresar el id de la reserva a eliminar');
        }else{

            console.log('eliminar'); 

            //Recorrer cada reserva para verificar que haya una reserva con el id buscado para eliminarlo
            for (let i = 0; i < databased.database.reserva_equipo.length; i++) {
                if (databased.database.reserva_equipo[i].id === reserva_equipos.id) {

                    //pasamos a reservaEliminada la reserva que se va a eliminar
                    let reservaEliminada = databased.database.reserva_equipo.splice(i, 1);

                    console.log(reservaEliminada); //mostramos por consola lo que eliminamos

                    return ('SE HA ELIMINADO CON EXITO LA RESERVA');
                };
            };
            return (`No se puede eliminar porque nos existe la reserva con el id: ${reserva_equipos.id}`);
        };
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