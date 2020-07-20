var readlineSync = require('readline-sync');

class Televisor1 {

    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;

    constructor(volumenIncial: number, canalInicial: number) {
        this.estaPrendido = false; //arranca apagado
        this.canalActual = canalInicial;
        this.volumenActual = volumenIncial;
    }

    prenderApagar(): void {
        if (this.estaPrendido) {

            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    }

    getEstaPrendido(): boolean {

        return this.estaPrendido;
    }

    subirVolumen(): void {

        this.volumenActual = this.volumenActual + 1;
    }

    bajarVolumen(): void {

        this.volumenActual = this.volumenActual - 1;
    }

    subirCanal(): void {
        this.canalActual = this.canalActual + 1;
    }

    bajarCanal(): void {
        this.canalActual = this.canalActual - 1;
    }

    elegirCanal(canal: number): void {
        this.canalActual = canal;
    }

    elegirVolumen(volumen: number): void {
        this.volumenActual = volumen;
    }


}

let volumenIncial: number = 20
let canalInicial: number = 24

let tv1 = new Televisor1(volumenIncial, canalInicial);
let tv2 = new Televisor1(30, 25);
let turn = false;

console.log(tv1);


if (tv1.getEstaPrendido() == false) {

    turn = readlineSync.keyInYN("Do you want to turn on the tv?");

    if (turn) {

        tv1.prenderApagar();
        
    }
    else{
        tv1.elegirCanal(0);
        tv1.elegirVolumen(0);
        console.log(tv1);
    }

}

if(tv1.getEstaPrendido()==true){
   
    tv1.bajarCanal();

    tv1.subirVolumen();

    console.log(tv1);
}


