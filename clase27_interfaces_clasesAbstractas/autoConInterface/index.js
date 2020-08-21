"use strict";
exports.__esModule = true;
var autoDeportivo_1 = require("./autoDeportivo");
var autoDep = new autoDeportivo_1.AutoDeCarrera(0, 'Ford', 'GHJ567');
autoDep.acelerar();
console.log('velocidad actual despues de una acelerada ' + autoDep.getVelocidadActual());
console.log('ver patente del auto deportivo ' + autoDep.getRegistry());
