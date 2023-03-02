//requerimientos
const databased = require("../dataBase/dataBase.js")

class personalControllers {

    // GET esta funcion muestra el personal de la BD "dataBase"
    listar(){
    console.log('listar personal');
    return databased.database.personal;
    };

    //POST crear un personal dentro de la BD, con un identificador (CI) único
    crear(personalc){

        //verificar que contenga todas las determinadas propiedades
        if (!personalc.Nombre_apellido || !personalc.CI || !personalc.nombre_usuario_unico || !personalc.contraseña || !personalc.especialidad || !personalc.cargo) {

            return ("No se agregó el personal, se requiere del personal: Nombre y Apellido, CI, Usuario, Contraseña, Cargo, Especialidad");

        }else{

        //recorrer cada personal para verificar que la CI no se repita, es decir sea un identificador único
            for (let i = 0; i < databased.database.personal.length; i++) {
                if (personalc.CI === databased.database.personal[i].CI){
                return (`No se agrego porque el personal con la C.I: ${personalc.CI}  ya existe`);
                };
            };

            console.log('se agregó'); 
            databased.database.personal.push(personalc); //se agrega a la BD
            return ("PERSONAL AGREGADO EXITOSAMENTE");
        };
    };

};

module.exports = new personalControllers();