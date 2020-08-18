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
var readlineSync = require('readline-sync');
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }
    Telefono.prototype.mandarMensaje = function (cel, msj) {
        console.log("este metodo se llama mandarMensaje y ejecuta desde la clase telefono");
        return true;
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("este metodo se llama hacerLlamada y ejecuta desde la clase telefono");
    };
    Telefono.prototype.prenderApagar = function () {
        console.log("este metodo se llama prenderApagar y ejecuta desde la clase telefono");
    };
    return Telefono;
}());
var Camara = /** @class */ (function () {
    function Camara() {
    }
    Camara.prototype.sacarFoto = function () {
        console.log("este metodo se llama sacarFoto y se ejecuta desde la clase camara");
    };
    return Camara;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        var _this = _super.call(this) || this;
        _this.camara = new Camara;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        this.camara.sacarFoto();
    };
    return TelefonoConCamara;
}(Telefono));
var startApp = readlineSync.questionInt("Insert 1 if you have and old telephone, 2 if your telephone has camera, another value to exit ");
if (startApp == 1) {
    var newTelephone = new Telefono;
    var option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to turnON/OFF the phone, another value to exit ");
    while (option > 0 && option <= 3) {
        switch (option) {
            case 1:
                var cel = 2494549328;
                newTelephone.mandarMensaje(cel, 'hola como estas?');
                break;
            case 2:
                newTelephone.hacerLlamada();
                break;
            case 3:
                newTelephone.prenderApagar();
                break;
        }
        option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to turnON/OFF the phone, another value to exit ");
    }
}
else if (startApp == 2) {
    var newTelephone = new TelefonoConCamara;
    var option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to turnON/OFF the phone, 4 to take a photo, another value to exit ");
    while (option > 0 && option <= 4) {
        switch (option) {
            case 1:
                var cel = 2494549328;
                newTelephone.mandarMensaje(cel, 'hola como estas?');
                break;
            case 2:
                newTelephone.hacerLlamada();
                break;
            case 3:
                newTelephone.prenderApagar();
                break;
            case 4:
                newTelephone.sacarFoto();
                break;
        }
        option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to turnON/OFF the phone,4 to take a photo, another value to exit ");
    }
}
