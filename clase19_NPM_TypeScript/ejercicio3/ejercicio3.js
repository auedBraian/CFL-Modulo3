"use strict";
exports.__esModule = true;
var ReadlineSync = require("./node_modules/readline-sync");
function ejecutar(seleccion) {
    switch (seleccion) {
        case 1:
            insertar();
            break;
        case 2:
            eliminar();
            break;
        case 3:
            buscar();
            break;
        case 4:
            actualizar();
            break;
        case 5:
            imprimir();
            break;
    }
}
function insertar() {
    var nuevaPalabra;
    nuevaPalabra = ReadlineSync.question('Ingrese nueva palabra ');
    palabras.push(nuevaPalabra);
}
function eliminar() {
    var posicion;
    posicion = ReadlineSync.questionInt('Ingrese la posicion del arreglo que quiere eliminar ');
    delete palabras[posicion];
}
function buscar() {
    var palabraBuscada;
    palabraBuscada = ReadlineSync.question('Ingrese la palabra a buscar ');
    for (var i = 0; i <= palabras.length; i++) {
        if (palabras[i] == palabraBuscada) {
            console.log("la palabra buscada esta en la posicion " + i);
        }
    }
}
function actualizar() {
    var palabraDeseada;
    var posicionDeseada;
    palabraDeseada = ReadlineSync.question('Ingrese palabra que desea actualizar ');
    posicionDeseada = ReadlineSync.questionInt('Ingrese posicion donde desea insertar la palabra nueva ');
    palabras[posicionDeseada] = palabraDeseada;
}
function imprimir() {
    for (var i = 0; i < palabras.length; i++) {
        console.log('palabra almacenada en posicion ' + i + ' = ' + palabras[i]);
    }
}
var palabras = new Array(5);
for (var i = 0; i < palabras.length; i++) {
    palabras[i] = ReadlineSync.question('Ingrese palabra Aleatoria ');
}
var opcion = 0;
opcion = ReadlineSync.questionInt("Ingrese 1 para insertar una palabra, 2 para eliminar, 3 para buscar y 4 para actualizar,5 para imprimir el arreglo y 0 para salir ");
while (opcion != 0) {
    ejecutar(opcion);
    opcion = ReadlineSync.questionInt("Ingrese 1 para insertar una palabra, 2 para eliminar, 3 para buscar y 4 para actualizar,5 para imprimir el arreglo y 0 para salir ");
}
