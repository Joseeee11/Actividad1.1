//requerimientos
const databased = require("../dataBase/dataBase.js")

class reserva_espaciosControllers {

    //GET esta funcion muestra los espacios de la base de datos "dataBase"
    listar(){
    console.log('listar'); //avisar que va a listar
    return databased.database.reserva_espacio;
    };


    //DELETE una funcion para eliminar determinada reserva por medio de in identificador (id)
    eliminar(reserva_espacios){

        //Verificar que haya un id
        if (!reserva_espacios.id) {
            return ('Debes ingresar el id de la reserva a eliminar')
        }else{

            console.log('eliminar');
            //Recorrer cada reserva para verificar que haya una reserva con el id buscado para eliminarlo
            for (let i = 0; i < databased.database.reserva_espacio.length; i++) {
            if (databased.database.reserva_espacio[i].id === reserva_espacios.id) {
                //pasamos a reservaEliminada la reserva a eliminar
                let reservaEliminada = databased.database.reserva_espacio.splice(i, 1);

                console.log(reservaEliminada);//mostramos la reserva eliminada
                return ('SE HA ELIMINADO CON EXITO LA RESERVA'); //retornamos
            };
            };
            return (`No se puede eliminar porque nos existe la reserva con el id: ${reserva_espacios.id}`);
        };
    };
};

module.exports = new reserva_espaciosControllers();