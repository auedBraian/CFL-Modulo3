
var readlineSync = require('readline-sync');

class monitor{

    private itsOn: boolean;
    private brand: string;
    private model: string;
    private resolution:number;
    private zise:number;
    private Qcolors: number;

    constructor(marca:string,modelo:string, tamaño:number,CantColores:number){
        this.itsOn=false;
        this.brand=marca;
        this.model=modelo;
        this.zise=tamaño;
        this.Qcolors=CantColores;
    }

    TurnOnTurnOff(): void {
        if (this.itsOn) {

            this.itsOn = false;
        }
        else {
            this.itsOn = true;
        }
    }
    
    turnResolution(res:number){
        this.resolution=res;
    }

    changeColors(Qcol:number){
        this.Qcolors=Qcol;
    }

    getItsOn():boolean{
        return this.itsOn;
    }

}


let monitor1 = new monitor('Sony','Led',15,16000);
let turn:string; 
let resolution:number;
let quantityColors:number;

console.log(monitor1);



if(monitor1.getItsOn() == false){ // --> quiero preguntar si esta apagado;

    turn = readlineSync.keyInYN("do you want to turn on the monitor? Y/N ");
    //turn.toUpperCase;

    if(turn){

        console.log("turning on... "); 
        monitor1.TurnOnTurnOff();
        console.log("Monitor it's on now");
        resolution = readlineSync.questionInt("Select resolution... ");
        quantityColors = readlineSync.questionInt("Select quantity colors... ");

        
    }
 }

monitor1.changeColors(quantityColors);

monitor1.turnResolution(resolution);

console.log("New characters");

console.log(monitor1);