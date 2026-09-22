const formulario = document.getElementById("clienteForm");

const respuesta = document.getElementById("respuesta");

const listaClientes = document.getElementById("listaClientes");


// Enviar un nuevo registro al servidor
formulario.addEventListener("submit", async (event) => {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();

    const edad =
        document.getElementById("edad").value;

    const ciudad =
        document.getElementById("ciudad").value.trim();


    try {

        const response = await fetch("/clientes", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                nombre,
                edad,
                ciudad
            })

        });


        const data = await response.json();


        if (!response.ok) {

            respuesta.textContent = data.error;

            respuesta.className = "error";

            return;

        }


        respuesta.textContent = data.mensaje;

        respuesta.className = "success";


        formulario.reset();


        cargarClientes();


    } catch (error) {

        respuesta.textContent =
            "No fue posible conectar con el servidor.";

        respuesta.className = "error";

    }

});


// Obtener los registros almacenados
async function cargarClientes() {

    try {

        const response =
            await fetch("/clientes");

        const clientes =
            await response.json();


        listaClientes.innerHTML = "";


        if (clientes.length === 0) {

            listaClientes.innerHTML =
                "<li>Aún no hay registros.</li>";

            return;

        }


        clientes
            .slice()
            .reverse()
            .forEach((cliente) => {

                const item =
                    document.createElement("li");


                item.textContent =
                    `${cliente.nombre} — ${cliente.ciudad} — ${cliente.edad} años`;


                listaClientes.appendChild(item);

            });


    } catch (error) {

        listaClientes.innerHTML =
            "<li>No se pudo cargar el historial.</li>";

    }

}


// Cargar los registros al abrir la página
cargarClientes();
