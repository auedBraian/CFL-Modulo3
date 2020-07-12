"use strict";
exports.__esModule = true;
var fs = require("fs");
//la variable texto la convierte en lo que esta escrito en el txt
var texto = fs.readFileSync('abc.txt', 'utf8');
//crea un array de strings, toma el texto y lo divide por espacios
var palabras = texto.split(' ');
console.log(palabras);
