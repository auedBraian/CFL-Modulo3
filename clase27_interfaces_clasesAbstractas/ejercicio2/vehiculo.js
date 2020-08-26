"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(brand, registry, year) {
        this.velocidadActual = 0;
        this.estaPrendido = false;
        this.marca = brand;
        this.patente = registry;
        this.anio = year;
    }
    Vehiculo.prototype.setMarca = function (marcaParametro) {
        this.marca = marcaParametro;
    };
    Vehiculo.prototype.setPatente = function (patenteParametro) {
        this.patente = patenteParametro;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.getEstaPrendido = function () {
        if (this.estaPrendido == true) {
            return true;
        }
        else {
            return false;
        }
    };
    Vehiculo.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
