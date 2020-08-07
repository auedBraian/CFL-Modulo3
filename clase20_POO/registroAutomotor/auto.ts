
import * as fs from 'fs';


var readlineSync = require('readline-sync');

class Auto {

    private brand: string;
    private model: string;
    private year: number;
    private color: string;
    private carRegistration:string;

    public constructor(brand: string, model: string, year: number, color: string, patente:string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.carRegistration=patente;

    }

    public getBrand(): string {
        return this.brand;
    }

    public setBrand(brand: string): void {
        this.brand = brand;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }


    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getCarRegistration(): string {
        return this.carRegistration;
    }

    public setCarRegistration(registration: string): void {
        this.carRegistration = registration;
    }


    public compare(auto1: Auto, auto2: Auto): boolean {

    if (auto1.getBrand() == auto2.getBrand() && auto1.getModel() == auto2.getModel() && auto1.getYear() == auto2.getYear() && auto1.getColor() == auto2.getColor() && auto1.getCarRegistration() == auto2.getCarRegistration()) {

            return true;

        }

    }

}




class AutomotorRegistry {

    private autos: Auto[] = [];

    constructor(autos?: Auto[]) {

        if (autos == undefined || autos == null) {

            this.autos = [];
        }
        else {
            this.autos = autos;
        }
    }

    searchAuto(auto: Auto): number {

        let position: number = -1;
      
        for (let i: number = 0; i < this.autos.length; i++) {

            let a: boolean = auto.compare(this.autos[i], auto);
            if (a == true) {
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

    
        searchAutobyCarRegistration(carReg: string): number {

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
    

    deleteAuto(auto: Auto): void {

        let position: number = -1;

        position = this.searchAuto(auto);

        if (position == -1) {

        }
        else {
            
            this.autos.splice(position,1);
        }

    }


    insertAuto(auto: Auto): void {

        this.autos.push(auto);
    }

    getAutosLength(): number {
        return this.autos.length;
    }


}


function completeRegistry(arrayCars: string[]): Auto[] {

    let registry: Auto[] = [];

    for (let i: number = 0; i < arrayCars.length; i++) {
        let arrayAuto: string[];
        arrayAuto = arrayCars[i].split(',');
        let auto1: Auto = new Auto(arrayAuto[0], arrayAuto[1], Number(arrayAuto[2]), arrayAuto[3],arrayAuto[4]);
        registry.push(auto1);
    }
    return registry;
}

function completeCar(): Auto {

    let brand: string = readlineSync.question("insert brand ");
    let model: string = readlineSync.question("insert model ");
    let year: number = readlineSync.questionInt("insert year ");
    let color: string = readlineSync.question("insert color ");
    let registration: string = readlineSync.question("insert car registration ");
    let car1: Auto = new Auto(brand, model, year, color, registration);
    return car1;
}


let car: string = fs.readFileSync('automotorList.txt', 'utf8');
let cars: string[] = [];
cars = car.split(';');


let registry: AutomotorRegistry = new AutomotorRegistry(completeRegistry(cars));

let option: number = 0;

console.log(registry);

option = readlineSync.questionInt("Wich option do you want to use? press 1 for search by features,2 for search by car registration, 3 for insert, 4 for delete, 5 for print all the registy, 0 for exit ");

while (option != 0) {

    let auto1: Auto;
    if (option == 1){
        auto1 = completeCar();
        registry.searchAuto(auto1);
    }
    else if(option==2){
        let carReg:string=readlineSync.question("insert car registration ");
        carReg.toUpperCase;
        registry.searchAutobyCarRegistration(carReg);
    }
    else if (option == 3) {
        auto1 = completeCar();
        registry.insertAuto(auto1);
    }
    else if (option == 4) {
        auto1 = completeCar();
        registry.deleteAuto(auto1);
    }
    else if (option == 5) {

        console.log(registry);
    }

    option = readlineSync.questionInt("Wich option do you want to use? press 1 for search by features,2 for search by car registration, 3 for insert, 4 for delete, 5 for print all the registy, 0 for exit ");
}




