var readlineSync = require('readline-sync');

class Telefono {

    private estaPrendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;

    constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }


    public mandarMensaje(cel:number, msj:string): boolean {
        console.log("este metodo se llama mandarMensaje y ejecuta desde la clase telefono");
        return true;
    }


    public hacerLlamada(): void {
        console.log("este metodo se llama hacerLlamada y ejecuta desde la clase telefono");

    }


    public prenderApagar(): void {
        console.log("este metodo se llama prenderApagar y ejecuta desde la clase telefono");
    }

    public verEstado():void{
        console.log(this.estaPrendido);
    }

}

class Camara {

    constructor() {

    }

    public sacarFoto(): void {

        console.log("este metodo se llama sacarFoto y se ejecuta desde la clase camara");
    }
}


class TelefonoConCamara extends Telefono {

    private camara: Camara;

    constructor() {
        super();
        this.camara = new Camara;
    }

    public sacarFoto(): void {
        this.camara.sacarFoto();
    }

}





let startApp: number = readlineSync.questionInt("Insert 1 if you have and old telephone, 2 if your telephone has camera, another value to exit ");

if (startApp == 1) {

    let newTelephone: Telefono = new Telefono;

    let option: number = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to turnON/OFF the phone, another value to exit ");

    while (option > 0 && option <= 3) {

        switch (option) {
            case 1: 
            let cel:number=2494549328;
            newTelephone.mandarMensaje(cel,'hola como estas?');
                break;
            case 2: newTelephone.hacerLlamada();
                break;
            case 3: newTelephone.prenderApagar();
                break;
        }

        option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to turnON/OFF the phone, another value to exit ");
    }

} else if (startApp == 2) {

    let newTelephone: TelefonoConCamara = new TelefonoConCamara;

    let option: number = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to turnON/OFF the phone, 4 to take a photo, another value to exit ");

    while (option > 0 && option <= 4) {

        switch (option) {
            case 1: let cel:number=2494549328;
                    newTelephone.mandarMensaje(cel,'hola como estas?');
                break;
            case 2: newTelephone.hacerLlamada();
                break;
            case 3: newTelephone.prenderApagar();
                break;
            case 4: newTelephone.sacarFoto();
                break;
        }

        option = readlineSync.questionInt("Press 1 to send a message, to 2 make a phone call, 3 to turnON/OFF the phone,4 to take a photo, another value to exit ");
    }
}










