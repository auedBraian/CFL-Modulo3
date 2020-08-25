"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var readlineSync = require('readline-sync');
//Clase Telefono --> clase padre, contiene atributos y metodos propios de su clase
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
    }
    Telefono.prototype.mandarMensaje = function () {
        var mensaje = readlineSync.question("Insert Message ");
        var send;
        send = readlineSync.keyInYN("do you want to send the message? " + mensaje);
        if (send) {
            console.log("message sent successfully ");
            this.bateriaActual -= 10;
        }
        else {
            console.log("message sending failed ");
        }
    };
    Telefono.prototype.hacerLlamada = function () {
        var telephoneNumber;
        telephoneNumber = Number(readlineSync.questionInt("Insert telephone number "));
        var call;
        call = readlineSync.keyInYN("do you want to call " + telephoneNumber + " ?");
        if (call) {
            console.log("Calling... ");
            this.bateriaActual -= 15;
        }
        else {
            console.log("Calling failed ");
        }
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Telefono.prototype.verBateriaActual = function () {
        return this.bateriaActual;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
