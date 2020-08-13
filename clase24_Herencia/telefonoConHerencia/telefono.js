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
    }
    Telefono.prototype.mandarMensaje = function () {
        var mensaje = readlineSync.question("Insert Message ");
        var send;
        send = readlineSync.keyInYN("do you want to send the message? " + mensaje);
        if (send) {
            console.log("message sent successfully ");
            this.bateriaActual -= 10;
        }
        else {
            console.log("message sending failed ");
        }
    };
    Telefono.prototype.hacerLlamada = function () {
        var telephoneNumber;
        telephoneNumber = Number(readlineSync.questionInt("Insert telephone number "));
        var call;
        call = readlineSync.keyInYN("do you want to call " + telephoneNumber + " ?");
        if (call) {
            console.log("Calling... ");
            this.bateriaActual -= 15;
        }
        else {
            console.log("Calling failed ");
        }
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Telefono.prototype.verBateriaActual = function () {
        return this.bateriaActual;
    };
    return Telefono;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        return _super.call(this) || this;
    }
    TelefonoConCamara.prototype.sacarFoto = function (click) {
        var imagen;
        if (click == true) {
            console.log("taking photo");
            imagen = "Imagen.jpg";
            this.bateriaActual -= 20;
            return imagen;
        }
    };
    return TelefonoConCamara;
}(Telefono));
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio() {
        var _this = _super.call(this) || this;
        _this.frecuenciaActual = 103.5;
        return _this;
    }
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        return this.frecuenciaActual;
    };
    TelefonoConRadio.prototype.cambiarFrecuenciaRadial = function (frecuencia) {
        this.frecuenciaActual = frecuencia;
    };
    return TelefonoConRadio;
}(Telefono));
function runTask(telephone, option) {
    switch (option) {
        case 1:
            telephone.mandarMensaje();
            break;
        case 2:
            telephone.hacerLlamada();
            break;
        case 3:
            var bateria = telephone.verBateriaActual();
            console.log("battery level " + bateria);
            break;
        case 4:
            telephone.prenderApagar();
            break;
    }
}
var startApp = readlineSync.questionInt("Insert 1 if you have and old telephone, 2 if your telephone has camera, 3 if your telephone has radio ");
if (startApp == 1) {
    var newTelephone = new Telefono;
    var option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, another value to exit ");
    while (option > 0 && option <= 4) {
        runTask(newTelephone, option);
        option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, another value to exit ");
    }
}
else if (startApp == 2) {
    var newTelephone = new TelefonoConCamara;
    var option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, 5 to take a photo, another value to exit ");
    while (option > 0 && option <= 5) {
        if ((option == 1) || (option == 2) || (option == 3) || (option == 4)) {
            runTask(newTelephone, option);
        }
        else if (option == 5) {
            var click = readlineSync.keyInYN("Do yo want to take a photo? ");
            var imagen = newTelephone.sacarFoto(click);
            console.log("your image´s name is " + imagen);
        }
        option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, 5 to take a photo, another value to exit ");
    }
}
else if (startApp == 3) {
    var newTelephone = new TelefonoConRadio;
    var option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, 5 to check radio frecuency, 6 to set radio frecuency, another value to exit ");
    while (option > 0 && option <= 6) {
        if ((option == 1) || (option == 2) || (option == 3) || (option == 4)) {
            runTask(newTelephone, option);
        }
        else if (option == 5) {
            var actualFrecuency = newTelephone.verFrecuenciaActual();
            console.log("actual frecuency is " + actualFrecuency);
        }
        else if (option == 6) {
            var newFrecuency = readlineSync.questionInt("Insert new frecuency ");
            newTelephone.cambiarFrecuenciaRadial(newFrecuency);
        }
        option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnFF the phone, 5 to check radio frecuency, 6 to set radio frecuency, another value to exit ");
    }
}
