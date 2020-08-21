
import {Auto} from './auto'

export class AutoDeportivo extends Auto{

    constructor(marca:string,modelo:number,patente:string){
        super(marca,modelo,patente);
        this.speed=0;
    }

    public mejorarModelo():void{

        this.model = this.model + 500;
    }

    public acelerar():void{

        this.speed +=70;
    }

}