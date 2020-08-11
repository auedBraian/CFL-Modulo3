var readlineSync = require('readline-sync');
var Televisor = /** @class */ (function () {
    function Televisor(onOff, deco1) {
        this.itsTurn = onOff;
        this.decodificador = deco1;
    }
    Televisor.prototype.setStatus = function (status) {
        this.itsTurn = status;
    };
    Televisor.prototype.getStatus = function () {
        return this.itsTurn;
    };
    Televisor.prototype.getActualChannel = function () {
        if (this.itsTurn === true) {
            return this.decodificador.getChannel();
        }
        else {
            console.log("Tv its off");
        }
    };
    Televisor.prototype.setNewChannel = function (newChannel) {
        if (this.itsTurn === true) {
            this.decodificador.setChannel(newChannel);
        }
        else {
            console.log("Tv its off");
        }
    };
    Televisor.prototype.getActualVolume = function () {
        if (this.itsTurn === true) {
            return this.decodificador.getVolume();
        }
        else {
            console.log("Tv its off");
        }
    };
    Televisor.prototype.setNewVolume = function (NewVolume) {
        if (this.itsTurn === true) {
            this.decodificador.setVolume(NewVolume);
        }
        else {
            console.log("Tv its off");
        }
    };
    Televisor.prototype.increaseVolume = function () {
        if (this.itsTurn == true) {
            this.decodificador.turnUpVolume();
        }
        else {
            console.log("Tv its off");
        }
    };
    Televisor.prototype.decreaseVolume = function () {
        if (this.itsTurn == true) {
            this.decodificador.turnDownVolume();
        }
        else {
            console.log("Tv its off");
        }
    };
    Televisor.prototype.increaseChannel = function () {
        if (this.itsTurn == true) {
            this.decodificador.turnUpChannel();
        }
        else {
            console.log("Tv its off");
        }
    };
    Televisor.prototype.decreaseChannel = function () {
        if (this.itsTurn == true) {
            this.decodificador.turnDownChannel();
        }
        else {
            console.log("Tv its off");
        }
    };
    return Televisor;
}());
var Decodificador = /** @class */ (function () {
    function Decodificador(channel, volume) {
        this.actualChannel = channel;
        this.actualVolume = volume;
    }
    Decodificador.prototype.setChannel = function (numberChannel) {
        this.actualChannel = numberChannel;
    };
    Decodificador.prototype.getChannel = function () {
        return this.actualChannel;
    };
    Decodificador.prototype.setVolume = function (numberVolume) {
        this.actualVolume = numberVolume;
    };
    Decodificador.prototype.getVolume = function () {
        return this.actualVolume;
    };
    Decodificador.prototype.turnUpVolume = function () {
        this.actualVolume = this.actualVolume + 1;
    };
    Decodificador.prototype.turnDownVolume = function () {
        this.actualVolume = this.actualVolume - 1;
    };
    Decodificador.prototype.turnUpChannel = function () {
        this.actualChannel = this.actualChannel + 1;
    };
    Decodificador.prototype.turnDownChannel = function () {
        this.actualChannel = this.actualChannel - 1;
    };
    return Decodificador;
}());
function createTV() {
    var turnOn = true;
    var channel = readlineSync.questionInt("Insert channel number ");
    var volume = readlineSync.questionInt("Insert volume level ");
    var deco1 = new Decodificador(channel, volume);
    var tv = new Televisor(turnOn, deco1);
    return tv;
}
function accesChannelOptions(tv) {
    var option = readlineSync.questionInt("Select 1 to know which channel its  running now, 2 if you want to increase 1 channel, 3 if you want to decrease 1 channel, 4 to exit ");
    while (option != 4) {
        switch (option) {
            case 1:
                console.log("actual channel is " + tv.getActualChannel());
                break;
            case 2:
                tv.increaseChannel();
                console.log("actual channel is " + tv.getActualChannel());
                break;
            case 3:
                tv.decreaseChannel();
                console.log("actual channel is " + tv.getActualChannel());
                break;
        }
        option = readlineSync.questionInt("Select 1 to know which channel its  running now, 2 if you want to increase 1 channel, 3 if you want to decrease 1 channel, 4 to exit ");
    }
}
function accesVolumeOptions(tv) {
    var option = readlineSync.questionInt("Select 1 to know which level volume has the tv now, 2 if you want to increase 1 level volume, 3 if you want to decrease 1 level, 4 to exit ");
    while (option != 4) {
        switch (option) {
            case 1:
                console.log("actual level volume is " + tv.getActualVolume());
                break;
            case 2:
                tv.increaseVolume();
                console.log("actual level volume is " + tv.getActualVolume());
                break;
            case 3:
                tv.decreaseChannel();
                console.log("actual level volume is " + tv.getActualVolume());
                break;
        }
        option = readlineSync.questionInt("Select 1 to know which level volume has the tv now, 2 if you want to increase 1 level volume, 3 if you want to decrease 1 level, 4 to exit ");
    }
}
function accesInformationTV(tv) {
    var option = readlineSync.questionInt("Select 1 to know which level volume has the tv now, 2 if you want to know which channel is running , 3 if you want to know tv status, 4 to exit ");
    while (option != 4) {
        switch (option) {
            case 1:
                console.log("actual level volume is " + tv.getActualVolume());
                break;
            case 2:
                console.log("actual channel is " + tv.getActualChannel());
                break;
            case 3:
                if (tv.getStatus() == true) {
                    console.log("TV its ON ");
                }
                else {
                    console.log("TV its OFF ");
                }
                break;
        }
        option = readlineSync.questionInt("Select 1 to know which level volume has the tv now, 2 if you want to know which channel is running , 3 if you want to know tv status, 4 to exit ");
    }
}
function setNewValues(tv) {
    var option = readlineSync.questionInt("Select 1 to set new channel,2 to set new volume, 3 to exit ");
    while (option != 3) {
        switch (option) {
            case 1:
                var newChannel = readlineSync.questionInt("Wich channel do you want to see? ");
                tv.setNewChannel(newChannel);
                break;
            case 2:
                var newVolume = readlineSync.questionInt("Wich volume do you want to set? ");
                tv.setNewVolume(newVolume);
                break;
        }
        option = readlineSync.questionInt("Select 1 to set new channel,2 to set new volume, 3 to exit ");
    }
}
//inicia programa
var variableDeControl = readlineSync.questionInt("Press 1 to set your new Tv, or any other value to exit ");
if (variableDeControl == 1) {
    var turn = void 0;
    turn = readlineSync.keyInYN("do you want to turn on the TV? Y/N ");
    if (turn) {
        var tv1 = createTV();
        var option = readlineSync.questionInt("Which action do yo want to do? Press 1 to access to the  actions related to the channels, 2 to acces to the actions related to the volume, 3 if you want to know something about the tv, 4 to set new values on the tv, 5 turn Off TV ");
        while (option != 5) {
            switch (option) {
                case 1:
                    accesChannelOptions(tv1);
                    break;
                case 2:
                    accesVolumeOptions(tv1);
                    break;
                case 3:
                    accesInformationTV(tv1);
                    break;
                case 4:
                    setNewValues(tv1);
                    break;
            }
            option = readlineSync.questionInt("Which action do yo want to do? Press 1 to access to the  actions related to the channels, 2 to acces to the actions related to the volume, 3 if you want to know something about the tv, 4 to set new values on the tv, 5 turn Off TV ");
        }
    }
    else {
        console.log("Thanks for trusting LG");
    }
}
if (variableDeControl != 1) {
    console.log("Thanks for trusting LG");
}
