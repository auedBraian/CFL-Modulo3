var readlineSync = require('readline-sync');


class Televisor {

    private itsTurn: boolean;
    private decodificador: Decodificador;

    constructor(onOff: boolean, deco1: Decodificador) {
        this.itsTurn = onOff;
        this.decodificador = deco1;

    }

    public setStatus(status: boolean): void {
        this.itsTurn = status;
    }


    public getStatus(): boolean {

        return this.itsTurn;
    }


    public getActualChannel(): number {

        if (this.itsTurn === true) {

            return this.decodificador.getChannel();
        }
        else {
            console.log("Tv its off");
        }
    }



    public setNewChannel(newChannel: number): void {

        if (this.itsTurn === true) {

            this.decodificador.setChannel(newChannel);
        }

        else {
            console.log("Tv its off");
        }
    }


    public getActualVolume(): number {

        if (this.itsTurn === true) {

            return this.decodificador.getVolume();
        }
        else {
            console.log("Tv its off");
        }
    }

    public setNewVolume(NewVolume: number): void {

        if (this.itsTurn === true) {

            this.decodificador.setVolume(NewVolume);
        }

        else {
            console.log("Tv its off");
        }
    }



    public increaseVolume(): void {
        if (this.itsTurn == true) {
            this.decodificador.turnUpVolume();
        }
        else {
            console.log("Tv its off");
        }
    }

    public decreaseVolume(): void {

        if (this.itsTurn == true) {
            this.decodificador.turnDownVolume();
        }
        else {
            console.log("Tv its off");
        }
    }



    public increaseChannel(): void {
        if (this.itsTurn == true) {
            this.decodificador.turnUpChannel();
        }
        else {
            console.log("Tv its off");
        }
    }



    public decreaseChannel(): void {

        if (this.itsTurn == true) {
            this.decodificador.turnDownChannel();
        }
        else {
            console.log("Tv its off");
        }
    }



}


class Decodificador {

    private actualChannel: number;
    private actualVolume: number;

    constructor(channel: number, volume: number) {

        this.actualChannel = channel;
        this.actualVolume = volume;

    }

    public setChannel(numberChannel: number): void {
        this.actualChannel = numberChannel;
    }

    public getChannel(): number {
        return this.actualChannel;
    }

    public setVolume(numberVolume: number): void {
        this.actualVolume = numberVolume;
    }

    public getVolume(): number {
        return this.actualVolume;
    }

    public turnUpVolume(): void {
        this.actualVolume = this.actualVolume + 1;
    }

    public turnDownVolume(): void {
        this.actualVolume = this.actualVolume - 1;
    }


    public turnUpChannel(): void {
        this.actualChannel = this.actualChannel + 1;
    }

    public turnDownChannel(): void {
        this.actualChannel = this.actualChannel - 1;
    }

}


function createTV(): Televisor {

    let turnOn: boolean = true;
    let channel: number = readlineSync.questionInt("Insert channel number ");
    let volume: number = readlineSync.questionInt("Insert volume level ");
    let deco1: Decodificador = new Decodificador(channel, volume);
    let tv: Televisor = new Televisor(turnOn, deco1);

    return tv;
}


function accesChannelOptions(tv: Televisor): void {

    let option: number = readlineSync.questionInt("Select 1 to know which channel its  running now, 2 if you want to increase 1 channel, 3 if you want to decrease 1 channel, 4 to exit ");

    while (option != 4) {

        switch (option) {
            case 1: console.log("actual channel is "+ tv.getActualChannel());
                    break;
            case 2: tv.increaseChannel();
                    console.log("actual channel is "+tv.getActualChannel());                
                    break;
            case 3: tv.decreaseChannel();
                    console.log("actual channel is "+tv.getActualChannel());
                    break;
        }
        option = readlineSync.questionInt("Select 1 to know which channel its  running now, 2 if you want to increase 1 channel, 3 if you want to decrease 1 channel, 4 to exit ");
    }
}


function accesVolumeOptions(tv: Televisor): void {

    let option: number = readlineSync.questionInt("Select 1 to know which level volume has the tv now, 2 if you want to increase 1 level volume, 3 if you want to decrease 1 level, 4 to exit ");

    while (option != 4) {

        switch (option) {
            case 1: console.log("actual level volume is "+ tv.getActualVolume());
                    break;
            case 2: tv.increaseVolume();
                    console.log("actual level volume is "+tv.getActualVolume());                
                    break;
            case 3: tv.decreaseChannel();
                    console.log("actual level volume is "+tv.getActualVolume());
                    break;
        }
        option = readlineSync.questionInt("Select 1 to know which level volume has the tv now, 2 if you want to increase 1 level volume, 3 if you want to decrease 1 level, 4 to exit ");
    }

}


function accesInformationTV(tv:Televisor):void{

    let option: number = readlineSync.questionInt("Select 1 to know which level volume has the tv now, 2 if you want to know which channel is running , 3 if you want to know tv status, 4 to exit ");

    while (option != 4) {

        switch (option) {
            case 1: console.log("actual level volume is "+ tv.getActualVolume());
                    break;
            case 2: console.log("actual channel is "+tv.getActualChannel());                
                    break;
            case 3: if(tv.getStatus()==true){
                    console.log("TV its ON ");
                    }
                    else{
                    console.log("TV its OFF ");
                    }   
                    break;
         }
        option = readlineSync.questionInt("Select 1 to know which level volume has the tv now, 2 if you want to know which channel is running , 3 if you want to know tv status, 4 to exit ");
    }

}

function setNewValues(tv:Televisor):void{

    let option: number = readlineSync.questionInt("Select 1 to set new channel,2 to set new volume, 3 to exit ");

    while (option != 3) {

        switch (option) {
            case 1: 
                    let newChannel:number=readlineSync.questionInt("Wich channel do you want to see? ");
                    tv.setNewChannel(newChannel);
                    break;
            case 2: let newVolume:number=readlineSync.questionInt("Wich volume do you want to set? ");
                    tv.setNewVolume(newVolume)
                    break;
            }
        
            option = readlineSync.questionInt("Select 1 to set new channel,2 to set new volume, 3 to exit ");
    }

}



//inicia programa
let variableDeControl: number = readlineSync.questionInt("Press 1 to set your new Tv, or any other value to exit ");

if (variableDeControl == 1) {

    let turn: string;
    turn = readlineSync.keyInYN("do you want to turn on the TV? Y/N ");

    if (turn) {

        let tv1: Televisor = createTV();

        let option: number = readlineSync.questionInt("Which action do yo want to do? Press 1 to access to the  actions related to the channels, 2 to acces to the actions related to the volume, 3 if you want to know something about the tv, 4 to set new values on the tv, 5 turn Off TV ");

        while (option != 5) {

            switch (option) {

                case 1: accesChannelOptions(tv1);
                break;
                case 2: accesVolumeOptions(tv1);
                break;
                case 3: accesInformationTV(tv1);
                break;
                case 4: setNewValues(tv1);
                break;
                }
            option = readlineSync.questionInt("Which action do yo want to do? Press 1 to access to the  actions related to the channels, 2 to acces to the actions related to the volume, 3 if you want to know something about the tv, 4 to set new values on the tv, 5 turn Off TV ");

        }

    }
    else{
        console.log("Thanks for trusting LG");
    }

}
if (variableDeControl != 1) {
    console.log("Thanks for trusting LG");
}
