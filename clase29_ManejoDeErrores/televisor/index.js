"use strict";
exports.__esModule = true;
var televisor_1 = require("./televisor");
var smartTv_1 = require("./smartTv");
var readlineSync = require('readline-sync');
try {
    var option = readlineSync.questionInt("Insert 1 to create a new SmartTv, 2 to create standar TV, 3 to exit ");
    if (option != 1 && option != 2 && option != 3) {
        throw new Error('Ninguna opcion ingresada es valida');
    }
    if (option == 1) {
        var newSmartTV = new smartTv_1.SmartTV;
        var SmartOptions = readlineSync.questionInt("which action do you want to execute with your new Smart tv? Press 1 to turn On/Off, 2 to turn up the volume, 3 to turn down the volume, 4 to select channel, case 5 to select volume level, case 6 to print information about actual channel and actual level volume, 7 to watch Netflix, another value tu exit ");
        while (SmartOptions <= 7 && SmartOptions > 0) {
            switch (SmartOptions) {
                case 1:
                    newSmartTV.prenderApagar();
                    break;
                case 2:
                    newSmartTV.subirVolumen();
                    break;
                case 3:
                    newSmartTV.bajarVolumen();
                    break;
                case 4:
                    var newChannel = readlineSync.questionInt("Insert new channel ");
                    newSmartTV.cambiarCanal(newChannel);
                    break;
                case 5:
                    var newVolume = readlineSync.questionInt("Insert new volume ");
                    newSmartTV.cambiarVolumen(newVolume);
                    break;
                case 6:
                    console.log("actual channel " + newSmartTV.getCanal() + ", actual level volume " + newSmartTV.getVolumen());
                    break;
                case 7: newSmartTV.mirarNetflix();
            }
            SmartOptions = readlineSync.questionInt("which action do you want to execute with your new Smart tv? Press 1 to turn On/Off, 2 to turn up the volume, 3 to turn down the volume, 4 to select channel, case 5 to select volume level, case 6 to print information about actual channel and actual level volume, 7 to watch Netflix, another value tu exit ");
        }
    }
    else if (option == 2) {
        var newStandarTV = new televisor_1.Televisor;
        var TVOptions = readlineSync.questionInt("which action do you want to execute with your new TV? Press 1 to turn On/Off, 2 to select channel, 3 to select volume, 4 to print information about actual channel and actual level volume, another value tu exit ");
        while (TVOptions <= 4 && TVOptions > 0) {
            switch (TVOptions) {
                case 1:
                    newStandarTV.prenderApagar();
                    break;
                case 2:
                    var newChannel = readlineSync.questionInt("Insert new channel ");
                    newStandarTV.cambiarCanal(newChannel);
                    break;
                case 3:
                    var newVolume = readlineSync.questionInt("Insert new volume ");
                    newStandarTV.cambiarVolumen(newVolume);
                    break;
                case 4:
                    console.log("actual channel " + newStandarTV.getCanal() + ", actual level volume " + newStandarTV.getVolumen());
                    break;
            }
            TVOptions = readlineSync.questionInt("which action do you want to execute with your new TV? Press 1 to turn On/Off, 2 to select channel, 3 to select volume, 4 to print information about actual channel and actual level volume, another value tu exit ");
        }
    }
    else if (option == 3) {
        console.log("Thanks for your visit");
    }
}
catch (e) {
    console.log(e.message);
}
