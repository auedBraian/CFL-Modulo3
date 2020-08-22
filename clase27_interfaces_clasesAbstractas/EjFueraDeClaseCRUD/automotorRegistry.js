"use strict";
exports.__esModule = true;
exports.AutomotorRegistry = void 0;
//Clase AutomotorRegistry con sus variables y metodos
var AutomotorRegistry = /** @class */ (function () {
    function AutomotorRegistry(autos) {
        this.autos = [];
        if (autos == undefined || autos == null) {
            this.autos = [];
        }
        else {
            this.autos = autos;
        }
    }
    //funcion que recibe un elemento de tipo Auto y busca en el registro si el elemento esta. Si esta devuelve la posicion del mismo. Para buscarlo utiliza la funcion compare de la clase Auto
    AutomotorRegistry.prototype.searchAuto = function (auto) {
        var position = -1;
        for (var i = 0; i < this.autos.length; i++) {
            var a = auto.compare(this.autos[i], auto);
            if (a) {
                position = i;
            }
        }
        if (position == -1) {
            console.log("the car is not registered ");
        }
        else {
            console.log("the car is registered in position " + position);
        }
        return position;
    };
    //funcion que recibe una patente, y busca en el registro si algun elemento del tipo Auto posee esa patente. Si esta devuelve la posicion de ese elemento, sino devuelve -1
    AutomotorRegistry.prototype.searchAutobyCarRegistration = function (carReg) {
        var position = -1;
        for (var i = 0; i < this.autos.length; i++) {
            if (this.autos[i].getCarRegistration() === carReg) {
                position = i;
            }
        }
        if (position == -1) {
            console.log("the car is not registered ");
        }
        else {
            console.log("the car is registered in position " + position);
        }
        return position;
    };
    //funcion que recibe un elemento de tipo Auto, lo busca en el registro y si esta lo elimina
    AutomotorRegistry.prototype.deleteAuto = function (auto) {
        var position = -1;
        position = this.searchAuto(auto);
        if (position == -1) {
        }
        else {
            this.autos.splice(position, 1);
        }
    };
    //funcion que recibe un elemento de tipo Auto y lo inserta en el registro
    AutomotorRegistry.prototype.insertAuto = function (auto) {
        this.autos.push(auto);
    };
    AutomotorRegistry.prototype.getAutosLength = function () {
        return this.autos.length;
    };
    AutomotorRegistry.prototype.getAutos = function () {
        return this.autos;
    };
    return AutomotorRegistry;
}());
exports.AutomotorRegistry = AutomotorRegistry;
