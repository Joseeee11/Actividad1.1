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

  //POST esta función crea un nuevo equipo, siempre y cuando este ceunte con cada una de las determinadas propiedades y tenga un Serial unico.
  crear(equipo){

    if (!equipo.Nombre || !equipo.Descripcion || !equipo.Serial || !equipo.Fecha_de_adquisicion || !equipo.Estatus) {

      return ("No se agregó el equipo, se requiere del equipo: Nombre, Descripción, Serial, Fecha de Adquisición, Estatus");

    } else {

      //pasará por cada uno de los equipos para comparar su serial y verificar que el que se quiere crear sea único
      for (let i = 0; i < databased.database.equipos.length; i++) {
        if (equipo.Serial === databased.database.equipos[i].Serial){
          return (`No se agrego porque el equipo con la serial: ${equipo.Serial}ya existe`);
        };
      };

      //además de tener que cumplir con los valores predeterminados para la propiedad "estatus", por ello la condicional:
      if (equipo.Estatus == "Disponible" || equipo.Estatus == "Ocupado" || equipo.Estatus == "Mantenimiento") {  

        console.log('agregar'); //para saber que esta agregando
        databased.database.equipos.push(equipo); //agregar a la BD
        return ("EQUIPO AGREGADO EXITOSAMENTE"); //retornamos que se ha añadido

      } else {
        return ("No se agrego el equipo porque no coincide los estatus con los disponibles: 'Disponible', 'Ocupado' o 'Mantenimiento'");
      };

    };
  };

   //DELETE esta función eliminará un determinado equipo por medio de su identificador
    eliminar(equipo){

        //primero debemos de saber si el usuario ingreso el serial del equipo a eliminar
        if (!equipo.Serial) {
            return ('Debes ingresar el serial del equipo a eliminar :v');
        }else{
            console.log('eliminar'); //para saber que ya ha eliminado

            //recorremos cada equipo para hallar el serial del equipo a eliminar
            for (let i = 0; i < databased.database.equipos.length; i++) {
                //Si su serial es igual:
                if (databased.database.equipos[i].Serial === equipo.Serial) {

                    let equipoEliminado = databased.database.equipos.splice(i, 1); //sacamos el equipo a eliminar de la BD
                    console.log(equipoEliminado); //para ver cual es el equipo eliminado
                    return ('SE HA ELIMINADO CON EXITO EL EQUIPO'); //retornamos
                };
            };
            return (`No existe el equipo con la serial: ${equipo.Serial}`); 
        };
    };

}

module.exports = new equipoControllers();
