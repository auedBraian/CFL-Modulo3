"use strict";
exports.__esModule = true;
var fs = require("fs");
function asignarEscuela(arrNom, arrEsc) {
    var nombre = ' ';
    for (var i = 0; i < arrNom.length; i++) {
        nombre = arrNom[i];
        nombre.toLocaleLowerCase;
        switch (nombre[0]) {
            case 'a':
            case 'b':
            case 'c':
            case 'd':
                console.log("la persona " + nombre + " vota en " + arrEsc[0]);
                break;
            case 'e':
            case 'f':
            case 'g':
            case 'h':
                console.log("la persona " + nombre + " vota en " + arrEsc[1]);
                break;
            case 'i':
            case 'j':
            case 'k':
            case 'l':
                console.log("la persona " + nombre + " vota en " + arrEsc[3]);
                break;
            case 'm':
            case 'n':
            case 'o':
            case 'p':
                console.log("la persona " + nombre + " vota en " + arrEsc[4]);
                break;
            case 'q':
            case 'r':
            case 's':
            case 't':
                console.log("la persona " + nombre + " vota en " + arrEsc[5]);
                break;
            case 'u':
            case 'v':
            case 'w':
            case 'x':
                console.log("la persona " + nombre + " vota en " + arrEsc[6]);
                break;
            case 'y':
            case 'z':
                console.log("la persona " + nombre + " vota en " + arrEsc[7]);
                break;
            default:
                console.log("no pasa nada");
                break;
        }
    }
}
//la variable texto la convierte en lo que esta escrito en el txt
var nombres = fs.readFileSync('nombres.txt', 'utf8');
var escuelas = fs.readFileSync('escuelas.txt', 'utf8');
nombres.toLocaleLowerCase;
escuelas.toLocaleLowerCase;
//crea un array de strings, toma el texto y lo divide por espacios
var arrNombres = nombres.split(',');
var arrEscuelas = escuelas.split(',');
asignarEscuela(arrNombres, arrEscuelas);
