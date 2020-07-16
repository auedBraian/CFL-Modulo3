var readlineSync = require('readline-sync');
var monitor = /** @class */ (function () {
    function monitor(marca, modelo, tamaño, CantColores) {
        this.itsOn = false;
        this.brand = marca;
        this.model = modelo;
        this.zise = tamaño;
        this.Qcolors = CantColores;
    }
    monitor.prototype.TurnOnTurnOff = function () {
        if (this.itsOn) {
            this.itsOn = false;
        }
        else {
            this.itsOn = true;
        }
    };
    monitor.prototype.turnResolution = function (res) {
        this.resolution = res;
    };
    monitor.prototype.changeColors = function (Qcol) {
        this.Qcolors = Qcol;
    };
    monitor.prototype.getItsOn = function () {
        return this.itsOn;
    };
    return monitor;
}());
var monitor1 = new monitor('Sony', 'Led', 15, 16000);
var turn;
var resolution;
var quantityColors;
console.log(monitor1);
if (monitor1.getItsOn() == false) { // --> quiero preguntar si esta apagado;
    turn = readlineSync.keyInYN("do you want to turn on the monitor? Y/N ");
    //turn.toUpperCase;
    if (turn) {
        console.log("turning on... ");
        monitor1.TurnOnTurnOff();
        console.log("Monitor it's on now");
        resolution = readlineSync.questionInt("Select resolution... ");
        quantityColors = readlineSync.questionInt("Select quantity colors... ");
    }
}
monitor1.changeColors(quantityColors);
monitor1.turnResolution(resolution);
console.log("New characters");
console.log(monitor1);
