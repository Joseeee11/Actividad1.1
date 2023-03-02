//requerimientos
const databased = require("../dataBase/dataBase.js")

class reserva_equiposControllers {

    //GET esta funcion muestra los equipos reservados de la base de datos "dataBase"
    listar(){
        console.log('listando'); //listando
        return databased.database.reserva_equipo;
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

};

module.exports = new reserva_equiposControllers();