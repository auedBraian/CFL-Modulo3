
import {Robot} from './robot'


export class RobotDeCasa extends Robot{


    public constructor(marcaRobot:string,potenciaRobot:number,modeloRobot:number,electricidad:boolean){
        super(marcaRobot,potenciaRobot,modeloRobot,electricidad);

    }

    public aumentarPotencia():void{

        this.potencia=this.potencia+40;
    }

    public disminuirPotencia():void{

    this.potencia=this.potencia-40;

    }

    public limpiar(comenzarLimpieza:boolean):void{
        if(comenzarLimpieza==true){
            console.log("robot limpiando");

        }
        else{
            console.log("robot finalizo limpieza");
        }

    }


}