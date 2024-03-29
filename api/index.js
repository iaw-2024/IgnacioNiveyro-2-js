const express = require("express");
const app = express();

const path = require('path');

app.use('/', express.static(path.join(__dirname, '..', 'public')));

const respuestaServidor = require("../public/express/respuestaServidor.js");
app.get("/express", respuestaServidor);


app.use('/cliente_servidor', express.static(path.join(__dirname, '..', 'public', 'cliente_servidor')));
app.get("/cliente_servidor", (req, res) => {
    
});

const datos = require('../public/datos_estaticos.json');


app.get("/cliente_servidor/cargarEmpleados", (req, res) => {
    // Carga los datos de los empleados
    res.json(datos);
});

app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
