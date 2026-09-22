const express = require("express");

const fs = require("fs");

const path = require("path");


const router = express.Router();


const dataDir =
    path.join(__dirname, "..", "data");


const dataFile =
    path.join(dataDir, "clientes.json");


// Verifica que exista la carpeta y el archivo
function asegurarArchivo() {

    if (!fs.existsSync(dataDir)) {

        fs.mkdirSync(dataDir, {
            recursive: true
        });

    }


    if (!fs.existsSync(dataFile)) {

        fs.writeFileSync(
            dataFile,
            "[]",
            "utf8"
        );

    }

}


// Leer los clientes almacenados
function leerClientes() {

    asegurarArchivo();


    try {

        const contenido =
            fs.readFileSync(
                dataFile,
                "utf8"
            );


        return JSON.parse(contenido);


    } catch (error) {

        return [];

    }

}


// Guardar los clientes
function guardarClientes(clientes) {

    asegurarArchivo();


    fs.writeFileSync(

        dataFile,

        JSON.stringify(
            clientes,
            null,
            2
        ),

        "utf8"

    );

}


// POST /clientes
router.post("/", (req, res) => {

    const {
        nombre,
        edad,
        ciudad
    } = req.body;


    // Validar campos obligatorios
    if (

        !nombre ||

        !String(nombre).trim() ||

        edad === undefined ||

        edad === null ||

        !String(ciudad).trim()

    ) {

        return res.status(400).json({

            error:
                "Todos los campos son obligatorios: nombre, edad y ciudad."

        });

    }


    // Convertir y validar edad
    const edadNumero =
        Number(edad);


    if (

        !Number.isFinite(edadNumero) ||

        edadNumero <= 0

    ) {

        return res.status(400).json({

            error:
                "La edad debe ser un número positivo."

        });

    }


    const clientes =
        leerClientes();


    const nuevoCliente = {

        id:
            clientes.length + 1,

        nombre:
            String(nombre).trim(),

        edad:
            edadNumero,

        ciudad:
            String(ciudad).trim()

    };


    clientes.push(
        nuevoCliente
    );


    guardarClientes(
        clientes
    );


    res.status(201).json({

        mensaje:
            `Hola ${nuevoCliente.nombre} de ${nuevoCliente.ciudad}, tienes ${nuevoCliente.edad} años. Gracias por tu interés en Lateral Lab.`,

        cliente:
            nuevoCliente

    });

});


// GET /clientes
router.get("/", (req, res) => {

    res.json(
        leerClientes()
    );

});


module.exports = router;
