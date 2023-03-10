//requerimientos
const e = require('express');
const databased = require("../dataBase/dataBase.js")

//controlador
class espaciosControllers {
    // GET esta funcion muestra los espacios de la BD "dataBase"
    listar(){
        console.log('se esta listando'); //para saber que va a listar
        return databased.database.espacio;
    };

    //POST para agregar un espacio xd 
    //¡¡¡Verificar que en Postman se envian los datos por: Body y en JSON!!!
    crear(espacios){
        //verficamos que contenga cada propiedad requerida
        if (!espacios.Nombre || !espacios.Descripcion || !espacios.Direccion || !espacios.Estatus) {
            return ("No se agregó el espacios, se requiere del espacios: Nombre, Descripción, Dirección, Estatus");
        }else{

            //Recorremos cada espacio para verificar que el "ID" del espacio que se desea crear sea único:
            for (let i = 0; i < databased.database.espacio.length; i++) {
                if (espacios.id === databased.database.espacio[i].id){
                    return (`No se agrego el espacio con el id: ${espacios.id} porque ya existe`);
                };
            };

            //confirmamos que cumpla con los valores predeterminados de "estatus"
            if (espacios.Estatus == "Disponible" || espacios.Estatus == "Ocupado" || espacios.Estatus == "Mantenimiento") {

                console.log('se agregó'); //para saber que agregar
                databased.database.espacio.push(espacios); //agregamos a la BD
                return ("ESPACIO AGREGADO EXITOSAMENTE");

            }else{

                return ("No se agrego el espacio porque no coincide los estatus con los disponibles: 'Disponible', 'Ocupado' o 'Mantenimiento'");
            };
        };
    };

    //PUT, esta funcion edita un espacio determinado por el id, recibimos el cuerpo de la respuesta y hacemos la modificacion 
    editar(espacios){

        console.log(espacios); //vemos que se quiere modificar

        //verificamos que tenga id
        if (!espacios.id) {
        return ('Debes ingresar el identificador (id) del espacio para editar');
        }else{

            //recorremos todos los espacios hasta encontrar el id del espacio a cambiar
            for (let i = 0; i < databased.database.espacio.length; i++) {
                if (databased.database.espacio[i].id === espacios.id) {

                console.log(databased.database.espacio); //vemos el espacio que se cambiará

                let Modificar = databased.database.espacio[i]; //lo guardamos en una variable
                let espaciosActualizado = espacios; //guardamos el espacio modificado
                console.log(espaciosActualizado); //vemos el espacio modificado

                //Con Object.assing asignamos un objeto a otro, modificanco las propiedades del objeto original
                Object.assign(Modificar, espaciosActualizado);

                console.log(databased.database.espacio); //vemos en consola para verificar todos los espacios y confirmar que se haya actualizado

                return ('SE HA EDITADO CORECTAMENTE EL ESPACIO');
                };
            };
            return (`No existe el espacio solicitado con el id: ${espacios.id}`);
        };
    };


};

module.exports = new espaciosControllers();