
export class Robot{


    protected marca:string;
    protected potencia:number;
    protected modelo:number;
    protected electrico:boolean;

    public constructor(marcaRobot:string,potenciaRobot:number,modeloRobot:number,electricidad:boolean){

        this.marca=marcaRobot;
        this.potencia=potenciaRobot;
        this.modelo=modeloRobot;
        this.electrico=electricidad;

    }


    public aumentarPotencia():void{

        this.potencia=this.potencia+20;
    }

    public disminuirPotencia():void{

    this.potencia=this.potencia-20;

    }

    public getPotencia():number{
        return this.potencia;
    }

    public getModelo():number{
        return this.modelo;
    }

    public getMarca():string{
        return this.marca
    }

    public limpiar(comenzar:boolean):void{
        if(comenzar==true){
            
        }
        else{
        }

    }

}