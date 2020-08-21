"use strict";
exports.__esModule = true;
exports.SmartPhone = void 0;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.estaPrendido = false;
    }
    SmartPhone.prototype.prender = function () {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        else {
            this.estaPrendido = false;
        }
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    SmartPhone.prototype.llamar = function (numero) {
        if (this.estaPrendido == false) {
            console.log("telefono apagado");
        }
        else {
            console.log("llamando " + numero);
        }
    };
    SmartPhone.prototype.sacarFoto = function () {
        if (this.estaPrendido == true) {
            console.log("sacando foto");
        }
        else {
            console.log("telefono apagado");
        }
    };
    return SmartPhone;
}());
exports.SmartPhone = SmartPhone;
