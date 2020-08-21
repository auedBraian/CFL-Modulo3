"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Auto = void 0;
var vehiculo_1 = require("./vehiculo");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(brand, model, year, color, patente) {
        var _this = _super.call(this, brand, model, year) || this;
        _this.color = color;
        _this.carRegistration = patente;
        return _this;
    }
    Auto.prototype.getColor = function () {
        return this.color;
    };
    Auto.prototype.setColor = function (color) {
        this.color = color;
    };
    Auto.prototype.getCarRegistration = function () {
        return this.carRegistration;
    };
    Auto.prototype.setCarRegistration = function (registration) {
        this.carRegistration = registration;
    };
    //funcion que recibe 2 elementos del tipo Auto y compara si son iguales. Si son iguales devuelve true
    Auto.prototype.compare = function (auto1, auto2) {
        if (auto1.getBrand() == auto2.getBrand() && auto1.getModel() == auto2.getModel() && auto1.getYear() == auto2.getYear() && auto1.getColor() == auto2.getColor() && auto1.getCarRegistration() == auto2.getCarRegistration()) {
            return true;
        }
    };
    return Auto;
}(vehiculo_1.Vehiculo));
exports.Auto = Auto;
