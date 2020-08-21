

export class Auto {

    protected brand:string;
    protected model:number;
    protected registry:string;
    protected speed:number;

    public constructor(marca:string,modelo:number,patente:string){
        this.brand=marca;
        this.model=modelo;
        this.registry=patente;
        this.speed=0;
    }


    public acelerar():void{

        this.speed +=15;
    }

    public mejorarModelo():void{

        this.model = this.model + 20;
    }


    public getBrand():string{
        return this.brand;
    }

    public getModel():number{
        return this.model;
    }
    
    public getRegistry():string{
        return this.registry;
    }

    public getSpeed():number{
        return this.speed
    }
}
