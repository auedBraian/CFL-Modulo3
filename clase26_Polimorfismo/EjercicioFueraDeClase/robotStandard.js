"use strict";
exports.__esModule = true;
exports.RobotStandard = void 0;
var RobotStandard = /** @class */ (function () {
    function RobotStandard(marcaRobot, modeloRobot, motorRobot) {
        this.marca = marcaRobot;
        this.modelo = modeloRobot;
        this.motor = motorRobot;
        this.estaPrendido = false;
    }
    RobotStandard.prototype.limpiar = function () {
    };
    RobotStandard.prototype.prenderRobot = function () {
        this.estaPrendido = true;
    };
    RobotStandard.prototype.apagarRobot = function () {
        this.estaPrendido = false;
    };
    RobotStandard.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    RobotStandard.prototype.getMarca = function () {
        return this.marca;
    };
    RobotStandard.prototype.setMotor = function (motor) {
        this.motor = motor;
    };
    RobotStandard.prototype.getMotor = function () {
        return this.motor;
    };
    RobotStandard.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    RobotStandard.prototype.getModelo = function () {
        return this.modelo;
    };
    return RobotStandard;
}());
exports.RobotStandard = RobotStandard;
