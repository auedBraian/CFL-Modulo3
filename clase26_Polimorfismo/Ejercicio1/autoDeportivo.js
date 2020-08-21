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
var auto_1 = require("./auto");
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(marca, modelo, patente) {
        var _this = _super.call(this, marca, modelo, patente) || this;
        _this.speed = 0;
        return _this;
    }
    AutoDeportivo.prototype.mejorarModelo = function () {
        this.model = this.model + 500;
    };
    AutoDeportivo.prototype.acelerar = function () {
        this.speed += 70;
    };
    return AutoDeportivo;
}(auto_1.Auto));
exports.AutoDeportivo = AutoDeportivo;
