
import { Telefono } from './telefono'

export class SmartPhone implements Telefono {

    protected estaPrendido: boolean

    constructor() {
        this.estaPrendido = false;
    }

    public prender(): void {

        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        else {
            this.estaPrendido = false;
        }

    }

    public apagar(): void {
        this.estaPrendido = false;
    }

    public llamar(numero: number): void {
        if (this.estaPrendido == false) {
            console.log("telefono apagado");
        }
        else {
            console.log("llamando " + numero);
        }

    }


    public sacarFoto(): void {
        if (this.estaPrendido == true) {
            console.log("sacando foto");
        }
        else {
            console.log("telefono apagado");
        }
    }


}