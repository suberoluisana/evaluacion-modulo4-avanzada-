const express = require("express");
const path = require("path");
const clientesRouter = require("./routes/clientes");

const app = express();
const PORT = 3000;

// Permite recibir información en formato JSON
app.use(express.json());

// Permite servir los archivos del frontend
app.use(express.static(path.join(__dirname, "public")));

// Conecta las rutas de clientes
app.use("/clientes", clientesRouter);

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
