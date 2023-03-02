//requerimientos
const databased = require("../dataBase/dataBase.js")

class solicitanteControllers {

    //GET esta funcion muestra el solicitante de la BD "dataBase"
    listar(){
        console.log('listar solicitantes');
        return databased.database.solicitante;
    };
       //mostrar por fecha

       

    //POST esta función para crear un nuevo solicitante
    crear(solicitantes){
      if (!solicitantes.Nombre_apellido || !solicitantes.CI || !solicitantes.fecha_nacimiento || !solicitantes.direccion || !solicitantes.nombre_usuario_unico || !solicitantes.contraseña  || !solicitantes.numero_tlf) {
        return ("No se agregó el solicitante, se requiere: Nombre y Apellido, CI, Usuario, Contraseña, Fecha de Nacimiento, Dirección y Número de Tlf");
      }else{

        //Recorremos cada solicitante para verificar que tenga un identificador (CI) único
        for (let i = 0; i < databased.database.solicitante.length; i++) {
          if (solicitantes.CI === databased.database.solicitante[i].CI){
            return (`No se agrego porque el solicitante con la C.I: ${solicitantes.CI}  ya existe`);
          }
        }

        console.log('se agregó');
        databased.database.solicitante.push(solicitantes); //agregamos solicitante nuevo
        return ("SOLICITANTE AGREGADO EXITOSAMENTE"); //retornamos
      };
    };

};

module.exports = new solicitanteControllers();