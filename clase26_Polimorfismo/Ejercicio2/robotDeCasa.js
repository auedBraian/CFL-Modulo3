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
exports.RobotDeCasa = void 0;
var robot_1 = require("./robot");
var RobotDeCasa = /** @class */ (function (_super) {
    __extends(RobotDeCasa, _super);
    function RobotDeCasa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RobotDeCasa.prototype.aumentarPotencia = function () {
        this.potencia = this.potencia + 40;
    };
    RobotDeCasa.prototype.disminuirPotencia = function () {
        this.potencia = this.potencia - 40;
    };
    RobotDeCasa.prototype.limpiar = function (comenzarLimpieza) {
        if (comenzarLimpieza == true) {
            console.log("robot limpiando");
        }
        else {
            console.log("robot finalizo limpieza");
        }
    };
    return RobotDeCasa;
}(robot_1.Robot));
exports.RobotDeCasa = RobotDeCasa;
