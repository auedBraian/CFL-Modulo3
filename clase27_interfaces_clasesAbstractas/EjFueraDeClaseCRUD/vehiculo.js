"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Vehiculo.prototype.getBrand = function () {
        return this.brand;
    };
    Vehiculo.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Vehiculo.prototype.getModel = function () {
        return this.model;
    };
    Vehiculo.prototype.setModel = function (model) {
        this.model = model;
    };
    Vehiculo.prototype.getYear = function () {
        return this.year;
    };
    Vehiculo.prototype.setYear = function (year) {
        this.year = year;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
