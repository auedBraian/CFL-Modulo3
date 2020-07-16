var readlineSync = require('readline-sync');
var Televisor1 = /** @class */ (function () {
    function Televisor1(volumenIncial, canalInicial) {
        this.estaPrendido = false; //arranca apagado
        this.canalActual = canalInicial;
        this.volumenActual = volumenIncial;
    }
    Televisor1.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Televisor1.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    Televisor1.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Televisor1.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Televisor1.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Televisor1.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    Televisor1.prototype.elegirCanal = function (canal) {
        this.canalActual = canal;
    };
    Televisor1.prototype.elegirVolumen = function (volumen) {
        this.volumenActual = volumen;
    };
    return Televisor1;
}());
var volumenIncial = 20;
var canalInicial = 24;
var tv1 = new Televisor1(volumenIncial, canalInicial);
var tv2 = new Televisor1(30, 25);
var turn = false;
console.log(tv1);
if (tv1.getEstaPrendido() == false) {
    turn = readlineSync.keyInYN("Do you want to turn on the tv?");
    if (turn) {
        tv1.prenderApagar();
    }
    else {
        tv1.elegirCanal(0);
        tv1.elegirVolumen(0);
        console.log(tv1);
    }
}
if (tv1.getEstaPrendido() == true) {
    tv1.bajarCanal();
    tv1.subirVolumen();
    console.log(tv1);
}
