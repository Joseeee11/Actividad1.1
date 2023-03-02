let database = {
    "equipos": [
        {
            Nombre: "Canaima",
            Descripcion: "Lapto del Gobierno",
            Serial: "AKHBCUYAV1351365",
            Fecha_de_adquisicion: "20230225",
            Estatus: "Disponible"
        },
        {
            Nombre: "Aro de Luz",
            Descripcion: "1m de altura, forma cuadrada, tuberia de peces",
            Serial: "CHGUIFGWU5463723",
            Fecha_de_adquisicion: "20021218",
            Estatus: "Disponible"
        },
        {
            Nombre: "Camara 360",
            Descripcion: "camara pequeña, lente ultrasonico, vision nocturna",
            Serial: "OEIQRUIWG7633476",
            Fecha_de_adquisicion: "19880602",
            Estatus: "Mantenimiento"
        },
        {
            Nombre: "Microfono xbox",
            Descripcion: "alta duracion en bateria",
            Serial: "JFOWEFBWBSD84783",
            Fecha_de_adquisicion: "20200216",
            Estatus: "Ocupado"
        },
        {
            Nombre: "Camara 4k",
            Descripcion: "la que uso kunno",
            Serial: "JBSVSINS51266823",
            Fecha_de_adquisicion: "20150525",
            Estatus: "Disponible"
        }
    ],
    "personal": [
        {
            Nombre_apellido: "Rositian Rangel",
            CI: "45767778",
            cargo: "Presidente",
            nombre_usuario_unico: "mini_rosit32",
            contraseña: "123456contrasena",
            especialidad: "administracion"
        },
        {
            Nombre_apellido: "Lisangreth Daboin",
            CI: "45767780",
            cargo: "Contador",
            nombre_usuario_unico: "messenger05",
            contraseña: "password4321",
            especialidad: "contabilidad"
        },
        {
            Nombre_apellido: "Alcachofa Garmendia",
            CI: "25897567",
            cargo: "Asesor de Mantenimiento",
            nombre_usuario_unico: "alcacho_21",
            contraseña: "german456",
            especialidad: "ingenieria mecanica"
        },
        {
            Nombre_apellido: "Mariangel",
            CI: "25265654",
            cargo: "Asesor de Video",
            nombre_usuario_unico: "Mari_457t",
            contraseña: "v246546322",
            especialidad: "Administracion"
        }
    ],
    "solicitante": [
        {
            Nombre_apellido: "Jose Felipe",
            CI: "53456234",
            fecha_nacimiento: "20320408",
            direccion: "San Rafael, Calle principal",
            nombre_usuario_unico: "feliope_234",
            contraseña: "ejgrwbn",
            numero_tlf: "0231-6323423"
        },
        {
            Nombre_apellido: "Sofia Velazques",
            CI: "232763234",
            fecha_nacimiento: "19991011",
            direccion: "Pampanito, Calle principal",
            nombre_usuario_unico: "sofi34546",
            contraseña: "biooii",
            numero_tlf: "0212-3234567"
        },
        {
            Nombre_apellido: "Emili Sanchez",
            CI: "23234567",
            fecha_nacimiento: "19991223",
            direccion: "Valera, Calle Secundaria",
            nombre_usuario_unico: "emilishdja",
            contraseña: "jkh4h53k45",
            numero_tlf: "0426-26736292"
        },
        {
            Nombre_apellido: "Luis Perez",
            CI: "32455345",
            fecha_nacimiento: "20050223",
            direccion: "Sabana Libre, Calle principal",
            nombre_usuario_unico: "luiiiiis",
            contraseña: "28738723df",
            numero_tlf: "0123-2345654"
        },
        
    ],
    "espacio": [
        {
            Nombre: "Espacio de Edición de Video",
            Descripcion: "Se encarga de la edición de los videos educativos de los estudiantes",
            Direccion: "Aula 3",
            Estatus: "Disponible",
            id: "1"
        },
        {
            Nombre: "Espacio de Grabación con Pantalla Verde",
            Descripcion: "Se encarga de la grabación de videos con efectos especiales",
            Direccion: "Aula 4",
            Estatus: "Ocupado",
            id: "2"
        },
        {
            Nombre: "Espacio de Audio",
            Descripcion: "Se encarga de la edición especifica del audio",
            Direccion: "Aula 4",
            Estatus: "Disponible",
            id: "3"
        }
        
    ],
    "reserva_equipo": [
        {
            id:"1",
            Solicitante_responsable: "Jose Felipe",
            Fecha: "20220322",
            HoraI:"0530",
            HoraF:"0645",
            Motivo: "Estudiar",
            Personal_tecnico_requerido: "Asesor de Mantenimiento",
            equipo_solicitados: "1",
        },
        {
            id:"2",
            Solicitante_responsable: "Sofia Velazques",
            Fecha: "20000514",
            HoraI:"0700",
            HoraF:"0900",
            Motivo: "Realizar video de Proyecto",
            Personal_tecnico_requerido: "Ingeniero en Mecanica",
            equipo_solicitados: "3"
        },
        {
            id:"3",
            Solicitante_responsable: "Mariangel",
            Fecha: "20220330",
            HoraI:"1000",
            HoraF:"1320",
            Motivo: "Grabacion de Elementos matematicos",
            Personal_tecnico_requerido: "Administrador",
            equipo_solicitados: "2"
        },
        
    ],
    "reserva_espacio": [
        {
            id:"1",
            Solicitante_responsable: "Jose Felipe",
            Fecha: "20220322",
            HoraI:"0500",
            HoraF:"0630",
            Motivo: "Estudiar",
            Personal_tecnico_requerido: "Asesor de Mantenimiento",
            Espacios_solicitados: "Espacio de Edición de Video"
        },
        {
            id:"2",
            Solicitante_responsable: "Mariangel",
            Fecha: "20000504",
            HoraI:"0800",
            HoraF:"1000",
            Motivo: "Grabacion de Elementos matematicos",
            Personal_tecnico_requerido: "Administrador",
            Espacios_solicitados: "Espacio de Grabación con Pantalla Verde"
        },
        {
            id:"3",
            Solicitante_responsable: "Emili Sanchez",
            Fecha: "20220504",
            HoraI:"1400",
            HoraF:"1600",
            Motivo: "Practica de Animacion",
            Personal_tecnico_requerido: "Asesor de Video",
            Espacios_solicitados: "Espacio de Grabación con Pantalla Verde"
        },
        {
            id:"4",
            Solicitante_responsable: "Mariangel",
            Fecha: "20010523",
            HoraI:"2300",
            HoraF:"2400",
            Motivo: "Grabacion de Algrebra",
            Personal_tecnico_requerido: "Asesor de Mantenimiento",
            Espacios_solicitados: "Espacio de Grabación con Pantalla Verde"
        }
    ]
}

module.exports.database = database;