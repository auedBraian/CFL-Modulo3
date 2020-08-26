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
exports.AutoDeportivo = void 0;
var vehiculo_1 = require("./vehiculo");
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(brand, registry, year) {
        var _this = _super.call(this, brand, registry, year) || this;
        _this.importado = false;
        _this.combustible = true;
        _this.altaGama = true;
        return _this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidadActual += 56;
    };
    AutoDeportivo.prototype.setImportado = function (importadoParametro) {
        this.importado = importadoParametro;
    };
    AutoDeportivo.prototype.getImportado = function () {
        return this.importado;
    };
    AutoDeportivo.prototype.setAltaGama = function (altaGamaParametro) {
        this.altaGama = altaGamaParametro;
    };
    AutoDeportivo.prototype.getAltaGama = function () {
        return this.altaGama;
    };
    AutoDeportivo.prototype.color = function () {
        console.log("color azul");
    };
    return AutoDeportivo;
}(vehiculo_1.Vehiculo));
exports.AutoDeportivo = AutoDeportivo;
