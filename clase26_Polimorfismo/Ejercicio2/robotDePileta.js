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
exports.RobotDePileta = void 0;
var robot_1 = require("./robot");
var RobotDePileta = /** @class */ (function (_super) {
    __extends(RobotDePileta, _super);
    function RobotDePileta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RobotDePileta.prototype.aumentarPotencia = function () {
        this.potencia = this.potencia + 80;
    };
    RobotDePileta.prototype.disminuirPotencia = function () {
        this.potencia = this.potencia - 80;
    };
    RobotDePileta.prototype.limpiar = function (comenzarLimpieza) {
        if (comenzarLimpieza == true) {
            console.log("robot comienza a purificar el agua");
        }
        else {
            console.log("robot finalizo de purificar el agua");
        }
    };
    return RobotDePileta;
}(robot_1.Robot));
exports.RobotDePileta = RobotDePileta;
