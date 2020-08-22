import {Auto} from './auto'

//Clase AutomotorRegistry con sus variables y metodos
export class AutomotorRegistry {

    private autos: Auto[] = [];

    constructor(autos?: Auto[]) {

        if (autos == undefined || autos == null) {

            this.autos = [];
        }
        else {
            this.autos = autos;
        }
    }

    //funcion que recibe un elemento de tipo Auto y busca en el registro si el elemento esta. Si esta devuelve la posicion del mismo. Para buscarlo utiliza la funcion compare de la clase Auto
    public searchAuto(auto: Auto): number {

        let position: number = -1;
      
        for (let i: number = 0; i < this.autos.length; i++) {

            let a: boolean = auto.compare(this.autos[i], auto);
            if (a) {
            position = i;
            }
        }

        if (position == -1) {

            console.log("the car is not registered ");
        }
        else {
            console.log("the car is registered in position " + position);
        }
        return position;
    }


    //funcion que recibe una patente, y busca en el registro si algun elemento del tipo Auto posee esa patente. Si esta devuelve la posicion de ese elemento, sino devuelve -1
    public searchAutobyCarRegistration(carReg: string): number {

        let position: number = -1;
      
        for (let i: number = 0; i < this.autos.length; i++) {

            if(this.autos[i].getCarRegistration() === carReg){     
            position = i;
            }
        }

        if (position == -1) {

            console.log("the car is not registered ");
        }
        else {
            console.log("the car is registered in position " + position);
        }
        return position;
    }
    
    
    //funcion que recibe un elemento de tipo Auto, lo busca en el registro y si esta lo elimina
    public deleteAuto(auto: Auto): void {

        let position: number = -1;

        position = this.searchAuto(auto);

        if (position == -1) {

        }
        else {
            
            this.autos.splice(position,1);
        }

    }

    //funcion que recibe un elemento de tipo Auto y lo inserta en el registro
    public insertAuto(auto: Auto): void {

        this.autos.push(auto);
    }

    public getAutosLength(): number {
        return this.autos.length;
    }

    public getAutos(): Auto[] {

        return this.autos;
    }
}
