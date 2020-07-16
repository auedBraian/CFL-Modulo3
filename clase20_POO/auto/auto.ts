class auto{

    private marca:string;
    private modelo:string;
    private año:number =2020;
    private velocidadActual:number=10;

    public constructor(marca: string, modelo:string, año?:number){
        this.marca = marca;
        this.modelo= modelo;
    
        if(año){
            this.año=año;
        }
        else{
            this.año=this.año;
        }
    
    }

    public acelerar(velocidad:number): void{
        this.velocidadActual = this.velocidadActual+velocidad;
    }


    public getVelocidadActual():number{
        return this.velocidadActual;
    }

}
    

    let primerAuto: auto = new auto('Ford','Fiesta',1998);
    let segundoAuto: auto = new auto('Chevrolet','Corsa',2015);
    let tercerAuto: auto = new auto('VW','Gol',2013);

    primerAuto.acelerar(20);

    console.log(primerAuto);
  
    console.log("el auto esta transitando a "+primerAuto.getVelocidadActual()+" km por hora");

