import {Robot} from './robot'


export class RobotDePileta extends Robot{


    public constructor(marcaRobot:string,potenciaRobot:number,modeloRobot:number,electricidad:boolean){
        super(marcaRobot,potenciaRobot,modeloRobot,electricidad);

    }

    public aumentarPotencia():void{

        this.potencia=this.potencia+80;
    }

    public disminuirPotencia():void{

    this.potencia=this.potencia-80;

    }

    public limpiar(comenzarLimpieza:boolean):void{
        if(comenzarLimpieza==true){
            console.log("robot comienza a purificar el agua");

        }
        else{
            console.log("robot finalizo de purificar el agua");
        }

    }


}