"use strict";
exports.__esModule = true;
var telefono_1 = require("./telefono");
var telefonoConCamara_1 = require("./telefonoConCamara");
var telefonoConRadio_1 = require("./telefonoConRadio");
var readlineSync = require('readline-sync');
//recibe un obejto del tipo Telefono, una opcion, y en base a la opcion recibida ejecuta una tarea
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
try {
    var startApp = readlineSync.questionInt("Insert 1 if you have and old telephone, 2 if your telephone has camera, 3 if your telephone has radio ");
    if (startApp != 1 && startApp != 2 && startApp != 3) {
        throw new Error('Ninguna opcion ingresada es valida');
    }
    if (startApp == 1) {
        var newTelephone = new telefono_1.Telefono;
        var option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, another value to exit ");
        while (option > 0 && option <= 4) {
            runTask(newTelephone, option); // envia el objeto de tipo Telefono y la opcion a la funcion runTask, y esta funcion va a ejecutar una tarea
            option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, another value to exit ");
        }
    }
    else if (startApp == 2) {
        var newTelephone = new telefonoConCamara_1.TelefonoConCamara;
        var option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, 5 to take a photo, another value to exit ");
        while (option > 0 && option <= 5) {
            if ((option == 1) || (option == 2) || (option == 3) || (option == 4)) {
                runTask(newTelephone, option); // envia el objeto de tipo TelefonoConCamara y la opcion a la funcion runTask, y esta funcion va a ejecutar una tarea
            }
            else if (option == 5) {
                var click = readlineSync.keyInYN("Do yo want to take a photo? ");
                var imagen = newTelephone.sacarFoto(click); //depende el valor enviado, saca la foto o no la saca
                console.log("your image´s name is " + imagen);
            }
            option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, 5 to take a photo, another value to exit ");
        }
    }
    else if (startApp == 3) {
        var newTelephone = new telefonoConRadio_1.TelefonoConRadio;
        var option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, 5 to check radio frecuency, 6 to set radio frecuency, another value to exit ");
        while (option > 0 && option <= 6) {
            if ((option == 1) || (option == 2) || (option == 3) || (option == 4)) {
                runTask(newTelephone, option); // envia el objeto de tipo TelefonoConCamara y la opcion a la funcion runTask, y esta funcion va a ejecutar una tarea
            }
            else if (option == 5) {
                var actualFrecuency = newTelephone.verFrecuenciaActual(); //devuelve la frecuencia de la radio que esta escuchando
                console.log("actual frecuency is " + actualFrecuency);
            }
            else if (option == 6) {
                var newFrecuency = readlineSync.questionInt("Insert new frecuency ");
                newTelephone.cambiarFrecuenciaRadial(newFrecuency); //cambia la frecuencia de la radio
            }
            option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnFF the phone, 5 to check radio frecuency, 6 to set radio frecuency, another value to exit ");
        }
    }
}
catch (e) {
    console.log(e.message);
}
