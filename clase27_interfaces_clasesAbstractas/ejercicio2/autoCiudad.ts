

import {Vehiculo} from './vehiculo'


export class AutoCiudad extends Vehiculo{


    public constructor(brand:string,registry:string, year:number){
        super(brand,registry,year);
    }

    public acelerar():void{
        this.velocidadActual+=15;
    }

    public color():void{
        console.log("color rojo");
    }
    
}