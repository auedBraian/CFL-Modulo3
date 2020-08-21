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
var robotStandard_1 = require("./robotStandard");
var RobotDePileta = /** @class */ (function (_super) {
    __extends(RobotDePileta, _super);
    function RobotDePileta(marcaRobot, modeloRobot, motorRobot) {
        return _super.call(this, marcaRobot, modeloRobot, motorRobot) || this;
    }
    RobotDePileta.prototype.limpiar = function () {
        if (this.estaPrendido == true) {
            console.log("limpiando la pileta ");
        }
        else if (this.estaPrendido == false) {
            console.log("debe prender el robot para poder ejecutar la accion ");
        }
    };
    RobotDePileta.prototype.purificarAgua = function () {
        if (this.estaPrendido == true) {
            console.log("purificando el agua ");
        }
        else {
            console.log("debe prender el robot para poder realizar la tarea ");
        }
    };
    return RobotDePileta;
}(robotStandard_1.RobotStandard));
exports.RobotDePileta = RobotDePileta;
