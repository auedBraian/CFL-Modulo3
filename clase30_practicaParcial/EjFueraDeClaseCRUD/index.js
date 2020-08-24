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
//recibo todo el registro automotor
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
imprimirRegistro(registroAlumnos); //imprimo registro cuando inicia programa
opcion = readlineSync.questionInt("Que accion desea realizar? presione 1 para buscar un alumno,2 para insertar un alumno en el registro,3 para borrar un alumno del registro,4 para consultar su promedio, 5 para consultar una nota, 6 para insertar una nota,7 para imprimir el registro, 0 para salir");
while (opcion != 0) {
    var alumno1 = void 0;
    if (opcion == 1) {
        alumno1 = completarAlumno(); //creo un nuevo alumno
        registroAlumnos.searchAlumno(alumno1); //envio el alumno creado al registro para ver si coincide con alguno de los elementos del registro
    }
    else if (opcion == 2) {
        alumno1 = completarAlumno(); //creo un alumno nuevo
        //chequeo que el alumno no este registrado
        var check = registroAlumnos.searchAlumno(alumno1);
        if (check == -1) {
            registroAlumnos.insertAlumno(alumno1);
        }
        updateTXTFile(registroAlumnos); //actualizo el txt
    }
    else if (opcion == 3) {
        alumno1 = completarAlumno(); //creo un alumno nuevo;
        registroAlumnos.deleteAlumno(alumno1); //busco un elemento del registro y lo elimino
        updateTXTFile(registroAlumnos); //actualizo el txt
    }
    else if (opcion == 4) {
        var posicion = readlineSync.questionInt("inserte en que posicion se encuentra el alumno del cual desea saber su promedio");
        if (posicion < registroAlumnos.getAlumnosLength()) {
            var promedio = registroAlumnos[posicion].getPromedio;
            console.log("su promedio es " + promedio);
        }
    }
    else if (opcion == 5) {
        var posicion = readlineSync.questionInt("inserte en que posicion se encuentra el alumno del cual desea saber una de sus notas");
        var posicionNota = readlineSync.questionInt("inserte en que posicion se encuentra el alumno del cual desea saber una de sus notas");
        var nota = registroAlumnos[posicion].getNota[posicionNota];
        console.log("la nota consultada es un " + nota);
    }
    else if (opcion == 6) {
        var posicion = readlineSync.questionInt("inserte en que posicion se encuentra el alumno del cual desea insertarle una nota");
        var notaNueva = 0;
        notaNueva = readlineSync.questionInt("Inserte la nota");
        registroAlumnos[posicion].setNota[notaNueva];
    }
    else if (opcion == 7) {
        imprimirRegistro(registroAlumnos); //imprimo el registro
        updateTXTFile(registroAlumnos); //actualizo el txt
    }
    opcion = readlineSync.questionInt("Que accion desea realizar? presione 1 para buscar un alumno,2 para insertar un alumno en el registro,3 para borrar un alumno del registro,4 para consultar su promedio, 5 para consultar una nota, 6 para insertar una nota,7 para imprimir el registro, 0 para salir");
}
