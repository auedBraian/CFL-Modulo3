"use strict";
exports.__esModule = true;
exports.Robot = void 0;
var Robot = /** @class */ (function () {
    function Robot(marcaRobot, potenciaRobot, modeloRobot, electricidad) {
        this.marca = marcaRobot;
        this.potencia = potenciaRobot;
        this.modelo = modeloRobot;
        this.electrico = electricidad;
    }
    Robot.prototype.aumentarPotencia = function () {
        this.potencia = this.potencia + 20;
    };
    Robot.prototype.disminuirPotencia = function () {
        this.potencia = this.potencia - 20;
    };
    Robot.prototype.getPotencia = function () {
        return this.potencia;
    };
    Robot.prototype.getModelo = function () {
        return this.modelo;
    };
    Robot.prototype.getMarca = function () {
        return this.marca;
    };
    Robot.prototype.limpiar = function (comenzar) {
        if (comenzar == true) {
        }
        else {
        }
    };
    return Robot;
}());
exports.Robot = Robot;
