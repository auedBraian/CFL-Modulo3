"use strict";
exports.__esModule = true;
var readlineSync = require('readline-sync');
var robotDePileta_1 = require("./robotDePileta");
var robotDeCasa_1 = require("./robotDeCasa");
var motor_1 = require("./motor");
function createMotor() {
    var potenciaMotor = readlineSync.questionInt("Ingrese caballos de potencia del motor ");
    var combustibleMotor = readlineSync.question("Ingrese tipo de combustible del motor ");
    var cantValvMotor = readlineSync.questionInt("ingrese cantidad de valvulas del motor ");
    var motor = new motor_1.Motor(potenciaMotor, combustibleMotor, cantValvMotor);
    return motor;
}
function createHomeRobot() {
    var marcaRobot = readlineSync.question("ingrese marca del robot ");
    var modeloRobot = readlineSync.questionInt("Ingrese modelo ");
    var motor = createMotor();
    var robot = new robotDeCasa_1.RobotDeCasa(marcaRobot, modeloRobot, motor);
    return robot;
}
function createPoolRobot() {
    var marcaRobot = readlineSync.question("ingrese marca del robot ");
    var modeloRobot = readlineSync.questionInt("Ingrese modelo ");
    var motor = createMotor();
    var robot = new robotDePileta_1.RobotDePileta(marcaRobot, modeloRobot, motor);
    return robot;
}
var option = readlineSync.questionInt("Presione 1 para crear un robot para su casa, 2 para crear un robot de pileta, o cualquier otro valor para salir ");
if (option == 1) {
    var homeRobot = createHomeRobot(); //RobotDeCasa hereda de RobotStandard
    var robotOptions = readlineSync.questionInt("Que accion desea que ejecute su Robot? Presione 1 para prenderlo, 2 para indicarle que comienze a limpiar la casa, 3 para indicarle que comienze a aspirar la alfombra, 4 para apagarlo, otro valor para salir ");
    while (robotOptions <= 4 && robotOptions > 0) {
        switch (robotOptions) {
            case 1:
                homeRobot.prenderRobot();
                break;
            case 2:
                homeRobot.limpiar(); //aca aplico polimorfismo
                break;
            case 3:
                homeRobot.aspirarAlfombra();
                break;
            case 4:
                homeRobot.apagarRobot();
                break;
        }
        robotOptions = readlineSync.questionInt("Que accion desea que ejecute su Robot? Presione 1 para prenderlo, 2 para indicarle que comienze a limpiar la casa, 3 para indicarle que comienze a aspirar la alfombra, 4 para apagarlo, otro valor para salir ");
    }
}
else if (option == 2) {
    var poolRobot = createPoolRobot(); //RobotDePileta hereda de RobotStandard
    var robotOptions = readlineSync.questionInt("Que accion desea que ejecute su Robot? Presione 1 para prenderlo, 2 para indicarle que comienze a limpiar la pileta,3 para purificar el agua, 4 para apagarlo, otro valor para salir");
    while (robotOptions <= 4 && robotOptions > 0) {
        switch (robotOptions) {
            case 1:
                poolRobot.prenderRobot();
                break;
            case 2:
                poolRobot.limpiar(); //aca aplico polimorfismo
                break;
            case 3:
                poolRobot.purificarAgua();
                break;
            case 4:
                poolRobot.apagarRobot();
                break;
        }
        robotOptions = readlineSync.questionInt("Que accion desea que ejecute su Robot? Presione 1 para prenderlo, 2 para indicarle que comienze a limpiar la pileta,3 para purificar el agua, 4 para apagarlo, otro valor para salir");
    }
}
else if (option != 1 && option != 2) {
    console.log("Thanks for your visit");
}
