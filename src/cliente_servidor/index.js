function cargarEmpleados() {
    // Realiza una petición GET al servidor para cargar los empleados
    fetch('/cliente_servidor/cargarEmpleados')
        .then(response => response.json()) // Parsea la respuesta como JSON
        .then(data => {
            console.log(data);
            // Construye la tabla HTML
            const tablaHTML = construirTabla(data);
            // Agrega la tabla al div con id "empleadosTabla"
            document.getElementById("empleadosTabla").innerHTML = tablaHTML;
        })
        .catch(error => {
            console.error('Error al cargar empleados:', error);
        });
}

function construirTabla(data) {
    // Inicializa la variable para almacenar el HTML de la tabla
    let tablaHTML = '<table border="1"><tr><th>Nombre</th><th>Apellido</th></tr>';
    
    // Itera sobre los elementos del array JSON y construye las filas de la tabla
    data.forEach(empleado => {
        tablaHTML += `<tr><td>${empleado.nombre}</td><td>${empleado.apellido}</td></tr>`;
    });

    // Cierra la etiqueta de la tabla
    tablaHTML += '</table>';

    // Retorna el HTML de la tabla
    return tablaHTML;
}

