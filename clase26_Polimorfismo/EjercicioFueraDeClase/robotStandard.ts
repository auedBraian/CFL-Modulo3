import {Motor} from './motor'


export class RobotStandard {

    //aqui aplico variables protected para que puedan utilizarlas las clases hijas
    protected marca:string;
    protected modelo:number;
    protected motor:Motor; //aqui aplico composicion 
    protected estaPrendido:boolean;

    public constructor(marcaRobot:string,modeloRobot:number,motorRobot:Motor){
        this.marca=marcaRobot;
        this.modelo=modeloRobot;
        this.motor=motorRobot;
        this.estaPrendido=false;
    }


    public limpiar():void{

    }

    public prenderRobot():void{

        this.estaPrendido=true;
    }

    public apagarRobot():void{
        
            this.estaPrendido=false;
    }

    

    public setMarca(marca:string):void{
        this.marca=marca;
    }

    public getMarca():string{
        return this.marca;
    }
    
    public setMotor(motor:Motor):void{
        this.motor=motor;

    }

    public getMotor():Motor{
        return this.motor;
    }

    public setModelo(modelo:number){
        this.modelo=modelo;
    }

    public getModelo():number{
        return this.modelo
    }
}
