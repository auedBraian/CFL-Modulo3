"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, patente) {
        this.brand = marca;
        this.model = modelo;
        this.registry = patente;
        this.speed = 0;
    }
    Auto.prototype.acelerar = function () {
        this.speed += 15;
    };
    Auto.prototype.mejorarModelo = function () {
        this.model = this.model + 20;
    };
    Auto.prototype.getBrand = function () {
        return this.brand;
    };
    Auto.prototype.getModel = function () {
        return this.model;
    };
    Auto.prototype.getRegistry = function () {
        return this.registry;
    };
    Auto.prototype.getSpeed = function () {
        return this.speed;
    };
    return Auto;
}());
exports.Auto = Auto;
