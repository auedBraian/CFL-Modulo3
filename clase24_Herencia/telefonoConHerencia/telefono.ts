
var readlineSync = require('readline-sync');

class Telefono {

    protected estaPrendido: boolean;
    protected bateriaActual: number;

    constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
    }


    public mandarMensaje(): void {

        let mensaje: String = readlineSync.question("Insert Message ");
        let send: string;
        send = readlineSync.keyInYN("do you want to send the message? " + mensaje);
        if (send) {
            console.log("message sent successfully ");
            this.bateriaActual -= 10;
        }
        else {
            console.log("message sending failed ");
        }
    }


    public hacerLlamada(): void {

        let telephoneNumber: number;
        telephoneNumber = Number(readlineSync.questionInt("Insert telephone number "));
        let call: string;
        call = readlineSync.keyInYN("do you want to call " + telephoneNumber + " ?");
        if (call) {
            console.log("Calling... ");
            this.bateriaActual -= 15;
        }
        else {
            console.log("Calling failed ");
        }

    }


    public prenderApagar(): void {

        if (this.estaPrendido) {
            this.estaPrendido = false
        }
        else {
            this.estaPrendido = true
        }
    }

    public verBateriaActual(): number {
        return this.bateriaActual;
    }

}



class TelefonoConCamara extends Telefono {

    constructor() {
        super();
    }


    public sacarFoto(click: boolean): string {

        let imagen: string;
        if (click == true) {
            console.log("taking photo");
            imagen = "Imagen.jpg";
            this.bateriaActual -= 20;
            return imagen;
        }

    }

}

class TelefonoConRadio extends Telefono {

    protected frecuenciaActual: number;

    constructor() {
        super();
        this.frecuenciaActual = 103.5;
    }

    public verFrecuenciaActual(): number {

        return this.frecuenciaActual
    }

    public cambiarFrecuenciaRadial(frecuencia: number): void {
        this.frecuenciaActual = frecuencia;
    }

}


function runTask(telephone: Telefono, option: number): void {

    switch (option) {
        case 1: telephone.mandarMensaje();
            break;
        case 2: telephone.hacerLlamada();
            break;
        case 3: let bateria: number = telephone.verBateriaActual();
            console.log("battery level " + bateria);
            break;
        case 4: telephone.prenderApagar();
            break;
    }

}

let startApp: number = readlineSync.questionInt("Insert 1 if you have and old telephone, 2 if your telephone has camera, 3 if your telephone has radio ");

if (startApp == 1) {

    let newTelephone: Telefono = new Telefono;

    let option: number = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, another value to exit ");

    while (option > 0 && option <= 4) {

        runTask(newTelephone, option);

        option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, another value to exit ");
    }

} else if (startApp == 2) {

    let newTelephone: TelefonoConCamara = new TelefonoConCamara;

    let option: number = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, 5 to take a photo, another value to exit ");

    while (option > 0 && option <= 5) {

        if ((option == 1) || (option == 2) || (option == 3) || (option == 4)) {
            runTask(newTelephone, option);
        }
        else if (option == 5) {
            let click: boolean = readlineSync.keyInYN("Do yo want to take a photo? ");
            let imagen:string= newTelephone.sacarFoto(click);
            console.log("your image´s name is "+imagen);

        }

        option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, 5 to take a photo, another value to exit ");

    }
} else if (startApp == 3) {

    let newTelephone: TelefonoConRadio = new TelefonoConRadio;

    let option: number = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnON/OFF the phone, 5 to check radio frecuency, 6 to set radio frecuency, another value to exit ");

    while (option > 0 && option <= 6) {

        if ((option == 1) || (option == 2) || (option == 3) || (option == 4)) {

            runTask(newTelephone, option);

        } else if (option == 5) {

            let actualFrecuency: number = newTelephone.verFrecuenciaActual();
            console.log("actual frecuency is " + actualFrecuency);
        
        } else if (option == 6) {

            let newFrecuency: number = readlineSync.questionInt("Insert new frecuency ");
            newTelephone.cambiarFrecuenciaRadial(newFrecuency);
        }

        option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to check battery, 4 to turnFF the phone, 5 to check radio frecuency, 6 to set radio frecuency, another value to exit ");

    }
}