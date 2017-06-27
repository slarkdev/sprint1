var estudiantes = [];
var dialogo = document.getElementById('dialogo');
// var assert = require('assert'); //llamamos al modulo assert de node js para hacer tdd

function Estudiante(nombre, puntosTecnicos, puntosHSE) {
    this.nombre = nombre;
    this.puntosTecnicos = puntosTecnicos;
    this.puntosHSE = puntosHSE;
}

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes; //devolvemos la lista de estudiantes
}

function registrarEstudiante() {
    dialogo.showModal();
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = document.getElementById('nombre').value; //capturamos los datos
    var puntosTecnicos = document.getElementById('puntosTecnicos').value;
    var puntosHSE = document.getElementById('puntosHSE').value;
    var estudiante = new Estudiante(nombre, puntosTecnicos, puntosHSE); //creamos un objeto estudiante
    var filtro = estudiantes.filter(n => { return n.nombre.toLowerCase() == nombre.toLowerCase() }); // filtramos para validar que no haya dos nombres iguales
    if (filtro.length != 0) {
        alert("Ya existe un estudiante con un nombre igual vuelve a intentar:)");
    } else {
        estudiantes.push(estudiante); // agregamos el objeto al arreglo
    }
    dialogo.close(); // cerramos el dialogo
    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var resultado = "";
    estudiantes.forEach((elemento) => {
        resultado += "<div class='row'>";
        resultado += "<div class='col m12'>";
        resultado += "<div class='card blue-grey darken-1'>";
        resultado += "<div class='card-content white-text'>";
        resultado += "<p><strong>Nombre:</strong> " + elemento.nombre + "</p>";
        resultado += "<p><strong>Puntos Técnicos:</strong> " + elemento.puntosTecnicos + "</p>";
        resultado += "<p><strong>Puntos HSE:</strong> " + elemento.puntosHSE + "</p>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
    })
    return resultado;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    return estudiantes.filter(elemento => {
        return nombre.toLowerCase() == elemento.nombre.toLowerCase() // filtramos por aquellos que tengan el mismo nombre eliminamos case sensitive
    });
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    return estudiantes.sort((n, m) => {
        return m.puntosTecnicos - n.puntosTecnicos; // ordenamos de mayor a menor
    });
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return estudiantes.sort((n, m) => {
        return m.puntosHSE - n.puntosHSE; // ordenamos de mayor a menor
    });
}