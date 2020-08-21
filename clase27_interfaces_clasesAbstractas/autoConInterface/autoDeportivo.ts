
import {Auto} from './auto'


export class AutoDeCarrera implements Auto{

    protected velocidadActual:number;
    protected brand:string;
    protected registry:string;
    
    constructor(velAct:number,marca:string,patente:string){
        this.velocidadActual=velAct;
        this.brand=marca;
        this.registry=patente;
    }
    
    
    public acelerar():void{
        this.velocidadActual=+50;
    }
    
    public getVelocidadActual():number{
        return this.velocidadActual;
    }
    
    public getBrand():string{
        return this.brand;
    }
    
    public getRegistry():string{
        return this.registry;
    }
    
    
    }