
const datos = require('../datos_estaticos.json');

function respuestaServidor(req, res) {
    // Convertir los datos JSON en una tabla HTML
    let tablaHTML = "<table border='1'>";
    tablaHTML += "<tr><th>Nombre</th><th>Apellido</th></tr>";
    // Recorrer los datos y construir la tabla
    datos.forEach(dato => {
        tablaHTML += `<tr><td>${dato.nombre}</td><td>${dato.apellido}</td></tr>`;
    });
    tablaHTML += "</table>";
    
    // Enviar la tabla HTML como respuesta
    res.send(tablaHTML);
}

module.exports = respuestaServidor;
