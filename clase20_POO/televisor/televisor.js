var decodificador = /** @class */ (function () {
    function decodificador() {
    }
    decodificador.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    decodificador.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    decodificador.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    decodificador.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    decodificador.prototype.elegirCanal = function (canal) {
        this.canalActual = canal;
    };
    return decodificador;
}());
var Televisor = /** @class */ (function () {
    function Televisor() {
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Televisor;
}());
