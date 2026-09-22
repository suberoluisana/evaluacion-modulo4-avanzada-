# Informe – Evaluación Módulo 5

## Descripción

Desarrollé una mini API REST para Lateral Lab que permite registrar personas interesadas mediante nombre, edad y ciudad. El backend valida los datos, guarda los registros en `clientes.json` y devuelve una respuesta personalizada. El frontend consume la API mediante `fetch()` y muestra el historial de registros.

## Tecnologías utilizadas

Utilicé Node.js, Express.js, JavaScript, HTML5 y CSS. Para simular la persistencia de los datos utilicé un archivo JSON en lugar de una base de datos.

## Estructura de carpetas y organización

El proyecto está organizado en diferentes carpetas para separar las responsabilidades. `server.js` inicia el servidor; `public/` contiene la interfaz y el archivo `main.js`; `routes/` contiene las rutas de la API; `data/` contiene el archivo `clientes.json`; y `package.json` gestiona la dependencia de Express.

## Flujo completo de datos

El usuario completa el formulario con su nombre, edad y ciudad. El archivo `main.js` envía los datos mediante `fetch()` utilizando una solicitud POST a `/clientes`. El servidor recibe la información y `clientes.js` valida los datos. Si son correctos, el registro se guarda en `clientes.json` y el servidor devuelve un mensaje personalizado. Después, el frontend realiza una solicitud GET a `/clientes` para obtener y mostrar el historial de registros.

## ¿Qué validaciones implementaste?

El servidor verifica que el nombre, la edad y la ciudad estén completos. También comprueba que la edad sea un número positivo. Estas validaciones se realizan en el servidor para garantizar que los datos recibidos sean correctos.

## ¿Qué aprendiste?

Aprendí a construir una API utilizando Express.js, organizar las rutas en un archivo separado, recibir información en formato JSON, utilizar `fetch()` para comunicar el frontend con el backend y simular la persistencia de datos mediante un archivo JSON.

## ¿Qué mejorarías?

Si tuviera más tiempo, incorporaría una base de datos real, autenticación de usuarios, validaciones más avanzadas y funcionalidades para editar y eliminar registros.
