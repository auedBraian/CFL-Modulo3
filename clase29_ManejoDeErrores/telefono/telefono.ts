
var readlineSync = require('readline-sync');

//Clase Telefono --> clase padre, contiene atributos y metodos propios de su clase
export class Telefono {

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
