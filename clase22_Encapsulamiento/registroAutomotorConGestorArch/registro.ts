
import * as fs from 'fs';

//Clase Auto con sus variables y metodos
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

//funcion que recibe 2 elementos del tipo Auto y compara si son iguales. Si son iguales devuelve true
    public compare(auto1: Auto, auto2: Auto): boolean {

    if (auto1.getBrand() == auto2.getBrand() && auto1.getModel() == auto2.getModel() && auto1.getYear() == auto2.getYear() && auto1.getColor() == auto2.getColor() && auto1.getCarRegistration() == auto2.getCarRegistration()) {

            return true;

        }

    }

}



//Clase AutomotorRegistry con sus variables y metodos
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

    //funcion que recibe un elemento de tipo Auto y busca en el registro si el elemento esta. Si esta devuelve la posicion del mismo. Para buscarlo utiliza la funcion compare de la clase Auto
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


    //funcion que recibe una patente, y busca en el registro si algun elemento del tipo Auto posee esa patente. Si esta devuelve la posicion de ese elemento, sino devuelve -1
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
    
    
    //funcion que recibe un elemento de tipo Auto, lo busca en el registro y si esta lo elimina
    deleteAuto(auto: Auto): void {

        let position: number = -1;

        position = this.searchAuto(auto);

        if (position == -1) {

        }
        else {
            
            this.autos.splice(position,1);
        }

    }

    //funcion que recibe un elemento de tipo Auto y lo inserta en el registro
    insertAuto(auto: Auto): void {

        this.autos.push(auto);
    }

    getAutosLength(): number {
        return this.autos.length;
    }


}


/*Clase FileManager, tiene los metodos para recibir informacion de un txt y convertir esa informacion a objetos de tipo Auto*/
class FileManager {
    
    private stringArray: string[];
    
    constructor(location: string) { 
        let txtFile: string = fs.readFileSync(location, 'utf8');
        this.stringArray = txtFile.split(';');
    } 

    public printStringArray():void{
        console.log('StringArray content: '+ this.stringArray);
    }

    public getStringArray():string[]{
        return this.stringArray;
    }
}



//Funcion que recibe un arreglo de strings, los transforma en elementos del tipo Auto, los insertar en el registro automotor que es un arreglo de elementos de tipo Auto
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

//funcion que crea un nuevo auto y lo devuelve
function completeCar(): Auto {

    let brand: string = readlineSync.question("insert brand ");
    let model: string = readlineSync.question("insert model ");
    let year: number = readlineSync.questionInt("insert year ");
    let color: string = readlineSync.question("insert color ");
    let registration: string = readlineSync.question("insert car registration ");
    let car1: Auto = new Auto(brand, model, year, color, registration);
    return car1;
}


let car: string = 'automotorList.txt';
let txtFile:FileManager = new FileManager(car);
let cars: string[] = [];
cars= txtFile.getStringArray();

//creo el registro automotor, y la funcion completeRegisty va a generar el arreglo de elementos de tipo Auto para llenar ese registro
let registry: AutomotorRegistry = new AutomotorRegistry(completeRegistry(cars));

let option: number = 0;

console.log(registry);

option = readlineSync.questionInt("Wich option do you want to use? press 1 for search by features,2 for search by car registration, 3 for insert, 4 for delete, 5 for print all the registy, 0 for exit ");

while (option != 0) {

    let auto1: Auto;
    if (option == 1){
        auto1 = completeCar(); //creo un nuevo auto
        registry.searchAuto(auto1); //envio el auto creado al registro para ver si coincide con alguno de los elementos del registro
    }
    else if(option==2){
        let carReg:string=readlineSync.question("insert car registration ");
        carReg.toUpperCase;
        registry.searchAutobyCarRegistration(carReg); //busco un elemento en el registro con la patente del elemento
    }
    else if (option == 3) {
        auto1 = completeCar();
        registry.insertAuto(auto1); //inserto un elemento Auto en el registro
    }
    else if (option == 4) {
        auto1 = completeCar();
        registry.deleteAuto(auto1); //busco un elemento del registro y lo elimino
    }
    else if (option == 5) {

        console.log(registry); // imprimo el registro completo
    }

    option = readlineSync.questionInt("Wich option do you want to use? press 1 for search by features,2 for search by car registration, 3 for insert, 4 for delete, 5 for print all the registy, 0 for exit ");
}


