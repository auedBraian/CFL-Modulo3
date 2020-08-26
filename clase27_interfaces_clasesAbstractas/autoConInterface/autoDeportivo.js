"use strict";
exports.__esModule = true;
exports.AutoDeCarrera = void 0;
var AutoDeCarrera = /** @class */ (function () {
    function AutoDeCarrera(velAct, marca, patente) {
        this.velocidadActual = velAct;
        this.brand = marca;
        this.registry = patente;
    }
    AutoDeCarrera.prototype.acelerar = function () {
        this.velocidadActual = +50;
    };
    AutoDeCarrera.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    AutoDeCarrera.prototype.getBrand = function () {
        return this.brand;
    };
    AutoDeCarrera.prototype.getRegistry = function () {
        return this.registry;
    };
    return AutoDeCarrera;
}());
exports.AutoDeCarrera = AutoDeCarrera;
