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
var Televisor = /** @class */ (function () {
    function Televisor() {
        this.canalActual = 0;
        this.volumenActual = 10;
        this.estaPrendido = false;
    }
    Televisor.prototype.cambiarCanal = function (canal) {
        this.canalActual = canal;
    };
    Televisor.prototype.cambiarVolumen = function (volumen) {
        this.volumenActual = volumen;
    };
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Televisor.prototype.getVolumen = function () {
        return this.volumenActual;
    };
    Televisor.prototype.getCanal = function () {
        return this.canalActual;
    };
    return Televisor;
}());
var SmartTV = /** @class */ (function (_super) {
    __extends(SmartTV, _super);
    function SmartTV() {
        var _this = _super.call(this) || this;
        _this.canalActual = 1;
        return _this;
    }
    SmartTV.prototype.mirarNetflix = function () {
        console.log('Mirando Netflix...');
    };
    SmartTV.prototype.subirVolumen = function () {
        this.volumenActual += 1;
    };
    SmartTV.prototype.bajarVolumen = function () {
        this.volumenActual -= 1;
    };
    return SmartTV;
}(Televisor));
var option = readlineSync.questionInt("Insert 1 to create a new SmartTv, 2 to create standar TV, other value to exit ");
if (option == 1) {
    var newSmartTV = new SmartTV;
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
    var newStandarTV = new Televisor;
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
else if (option != 1 && option != 2) {
    console.log("Thanks for your visit");
}
