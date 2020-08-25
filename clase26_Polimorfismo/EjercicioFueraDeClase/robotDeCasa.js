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
var robotStandard_1 = require("./robotStandard");
var RobotDeCasa = /** @class */ (function (_super) {
    __extends(RobotDeCasa, _super);
    function RobotDeCasa(marcaRobot, modeloRobot, motorRobot) {
        return _super.call(this, marcaRobot, modeloRobot, motorRobot) || this;
    }
    RobotDeCasa.prototype.limpiar = function () {
        if (this.estaPrendido == true) {
            console.log("comenzando a limpiar la casa");
        }
        else {
            console.log("debe prender el robot para indicarle una tarea");
        }
    };
    RobotDeCasa.prototype.aspirarAlfombra = function () {
        if (this.estaPrendido == true) {
            console.log("comenzando a aspirar alfombra");
        }
        else {
            console.log("debe prender el robot para indicarle una tarea");
        }
    };
    return RobotDeCasa;
}(robotStandard_1.RobotStandard));
exports.RobotDeCasa = RobotDeCasa;
