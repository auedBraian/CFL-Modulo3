"use strict";
exports.__esModule = true;
var fs = require("fs");
var alumno_1 = require("./alumno");
var registroAlumnos_1 = require("./registroAlumnos");
var fileManager_1 = require("./fileManager");
var readlineSync = require('readline-sync');
//Funcion que recibe un arreglo de strings, los transforma en elementos del tipo Alumno, los inserta en el registro  de alumnos que es un arreglo de elementos de tipo Alumnos
function completarRegistro(arrayAlumnos) {
    var registro = [];
    for (var i = 0; i < arrayAlumnos.length; i++) {
        var arrayAlumno = void 0;
        arrayAlumno = arrayAlumnos[i].split(',');
        var alumno1 = new alumno_1.Alumno(arrayAlumno[0], arrayAlumno[1], Number(arrayAlumno[2]));
        registro.push(alumno1);
    }
    return registro;
}
//funcion que crea un nuevo alumno y lo devuelve
function completarAlumno() {
    var nombre = readlineSync.question("insertar Nombre ");
    var apellido = readlineSync.question("insertar Apellido ");
    var DNI = readlineSync.questionInt("insertar DNI ");
    var alumno1 = new alumno_1.Alumno(nombre, apellido, DNI);
    return alumno1;
}
//recibo todo el registro de alumnos
function updateTXTFile(registroAlumnos) {
    var txtFile = '';
    for (var i = 0; i < registroAlumnos.getAlumnosLength(); i++) {
        //obtengo uno a uno los objetos Auto del registro
        var alumno_2 = registroAlumnos.getAlumnos()[i];
        if (alumno_2.getNombre() == '') {
        }
        else {
            //los valores de cada alumno los voy almacenando en esta variable de tipo string
            txtFile = txtFile + alumno_2.getNombre() + ',' + alumno_2.getApellido() + ',' + alumno_2.getDNI().toString() + ';';
        }
    }
    //actualizo el txt
    fs.writeFile('alumnosList.txt', txtFile, function (err) {
        if (err)
            throw err;
    });
}
function imprimirRegistro(registro) {
    for (var i = 0; i < registro.getAlumnosLength(); i++) {
        if (registro.getAlumnos()[i].getNombre() == '') { //este if evita imprimir el ultimo elemento que seria vacio
        }
        else {
            console.log(registro.getAlumnos()[i]); // imprimo el registro completo
        }
    }
}
var alumno = 'alumnosList.txt';
var txtFile = new fileManager_1.FileManager(alumno);
var alumnos = [];
alumnos = txtFile.getStringArray();
//creo el registro de alumnos, y la funcion completeRegisty va a generar el arreglo de elementos de tipo Alumnos para llenar ese registro
var registroAlumnos = new registroAlumnos_1.RegistroAlumnos(completarRegistro(alumnos));
var opcion = 0;
opcion = readlineSync.questionInt("Que accion desea realizar? presione 1 para buscar un alumno,2 para insertar un alumno en el registro,3 para borrar un alumno del registro,4 para consultar su promedio, 5 para consultar una nota, 6 para insertar una nota,7 para imprimir el registro, 0 para salir ");
while (opcion != 0) {
    //let alumno1: Alumno;
    if (opcion == 1) {
        var DNI = readlineSync.question("Ingrese DNI del alumno buscado ");
        registroAlumnos.searchAlumno(DNI); //envio el DNI del alumno buscado al registro para ver si coincide con el atributo DNI de alguno de los elementos del registro
    }
    else if (opcion == 2) {
        var alumno1 = completarAlumno(); //creo un alumno nuevo
        //chequeo que el alumno no este registrado
        var check = registroAlumnos.searchAlumno(alumno1.getDNI());
        if (check == -1) {
            registroAlumnos.insertAlumno(alumno1);
        }
        updateTXTFile(registroAlumnos); //actualizo el txt
    }
    else if (opcion == 3) {
        var DNI = readlineSync.question("Ingrese DNI del alumno que desea borrar ");
        registroAlumnos.deleteAlumno(DNI); //busco un elemento del registro y lo elimino
        updateTXTFile(registroAlumnos); //actualizo el txt
    }
    else if (opcion == 4) {
        var posicion = readlineSync.questionInt("inserte en que posicion se encuentra el alumno del cual desea saber su promedio ");
        if (posicion < registroAlumnos.getAlumnosLength()) {
            registroAlumnos.getAlumnos()[posicion].getPromedio();
        }
    }
    else if (opcion == 5) {
        var posicion = readlineSync.questionInt("inserte en que posicion se encuentra el alumno del cual desea saber una de sus notas ");
        var posicionNota = readlineSync.questionInt("Inserte posicion de la nota en el arreglo de notas ");
        console.log("notas del alumno seleccionado " + registroAlumnos.getAlumnos()[posicion].getNota(posicionNota));
    }
    else if (opcion == 6) {
        var posicion = readlineSync.questionInt("inserte en que posicion se encuentra el alumno del cual desea insertarle una nota ");
        var notaNueva = readlineSync.questionInt("Inserte la nota ");
        registroAlumnos.getAlumnos()[posicion].setNota[Number(notaNueva)];
    }
    else if (opcion == 7) {
        imprimirRegistro(registroAlumnos); //imprimo el registro
    }
    opcion = readlineSync.questionInt("Que accion desea realizar? presione 1 para buscar un alumno,2 para insertar un alumno en el registro,3 para borrar un alumno del registro,4 para consultar su promedio, 5 para consultar una nota, 6 para insertar una nota,7 para imprimir el registro, 0 para salir ");
}
