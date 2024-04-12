var mapeoEmpleados = {};
var indiceEmpleado = 1;

function cargarEmpleados() {
    // Realiza una solicitud fetch al archivo JSON
    fetch('./datos_estaticos.json')
      .then(response => {
        // Verifica si la solicitud fue exitosa
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        // Parsea la respuesta como JSON
        return response.json();
      })
      .then(datos => {
        // Llama a la función agregarEmpleadosTabla con los datos
        agregarEmpleadosTabla(datos);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

function agregarEmpleadosTabla(jsonElement){
    var table = document.getElementById('table');
    for (var i = 0; i < jsonElement.length; i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = jsonElement[i].nombre;
        cell2.innerHTML = jsonElement[i].apellido;
        mapeoEmpleados[indiceEmpleado] = jsonElement[i];
        indiceEmpleado++;
    }
    var botonCargarEmpleados = document.getElementById('cargarEmpleadosBTN');
    botonCargarEmpleados.disabled = true;
}

function agregarNuevoEmpleado(){
    var nombreEmpleado = document.getElementById('inputNombre').value;
    var apellidoEmpleado = document.getElementById('inputApellido').value;
    if(nombre == "" || apellido == ""){
        alert("Todos los campos son obligatorios");
        return;
    }else{
        const existeEmpleado = Object.values(mapeoEmpleados).some( ({ nombre, apellido }) => nombre === nombreEmpleado || apellido === apellidoEmpleado );
        if(existeEmpleado){
            //show an alert with confirm and deny button
            if(confirm("El empleado ya existe, ¿Desea actualizarlo?")){
                actualizarEmpleadoEnTabla(nombreEmpleado, apellidoEmpleado);
            }
        }
        else{
            agregarEmpleadoSimple(nombreEmpleado,apellidoEmpleado);
        }
            
    }
}

function agregarEmpleadoSimple(nombre,apellido){
    var table = document.getElementById('table');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = nombre;
    cell2.innerHTML = apellido;
    mapeoEmpleados[indiceEmpleado] = {nombre:nombre,apellido:apellido};
    indiceEmpleado++;
}

function actualizarEmpleadoEnTabla(nombre, apellido) {
    // Obtener la referencia a la tabla
    const tabla = document.getElementById("table");

    // Obtener todas las filas de la tabla
    const filas = tabla.getElementsByTagName("tr");

    // Iterar sobre las filas, excluyendo la primera que contiene los encabezados
    for (let i = 1; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName("td");
        if (celdas.length >= 2) {
            const nombreEmpleado = celdas[0].innerText;
            const apellidoEmpleado = celdas[1].innerText;

            // Verificar si el nombre o el apellido del empleado coincide con los datos proporcionados
            if (nombreEmpleado === nombre || apellidoEmpleado === apellido) {
                // Encontró al empleado, actualizar su nombre y apellido
                celdas[0].innerText = nombre;
                celdas[1].innerText = apellido;
                break;
            }
        }
    }

    // Si no se encontró al empleado, devolver -1
    return -1;
}


