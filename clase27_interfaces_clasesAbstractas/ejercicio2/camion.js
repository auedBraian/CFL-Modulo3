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
exports.Camion = void 0;
var vehiculo_1 = require("./vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(brand, registry, year) {
        var _this = _super.call(this, brand, registry, year) || this;
        _this.tara = 100;
        _this.largo = 3;
        _this.cerealero = false;
        return _this;
    }
    Camion.prototype.acelerar = function () {
        this.velocidadActual += 30;
    };
    Camion.prototype.setCerealero = function (cerealeroParametro) {
        this.cerealero = cerealeroParametro;
    };
    Camion.prototype.getCerealero = function () {
        return this.cerealero;
    };
    Camion.prototype.setTara = function (taraParametro) {
        this.tara = taraParametro;
    };
    Camion.prototype.getTara = function () {
        return this.tara;
    };
    Camion.prototype.setLargo = function (largoParametro) {
        this.largo = largoParametro;
    };
    Camion.prototype.getLargo = function () {
        return this.largo;
    };
    Camion.prototype.color = function () {
        console.log("color verde");
    };
    return Camion;
}(vehiculo_1.Vehiculo));
exports.Camion = Camion;
