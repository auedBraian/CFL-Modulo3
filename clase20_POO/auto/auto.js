var auto = /** @class */ (function () {
    function auto(marca, modelo, año) {
        this.año = 2020;
        this.velocidadActual = 10;
        this.marca = marca;
        this.modelo = modelo;
        if (año) {
            this.año = año;
        }
        else {
            this.año = this.año;
        }
    }
    auto.prototype.acelerar = function (velocidad) {
        this.velocidadActual = this.velocidadActual + velocidad;
    };
    auto.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return auto;
}());
var primerAuto = new auto('Ford', 'Fiesta', 1998);
var segundoAuto = new auto('Chevrolet', 'Corsa', 2015);
var tercerAuto = new auto('VW', 'Gol', 2013);
primerAuto.acelerar(20);
console.log(primerAuto);
console.log("el auto esta transitando a " + primerAuto.getVelocidadActual() + " km por hora");
