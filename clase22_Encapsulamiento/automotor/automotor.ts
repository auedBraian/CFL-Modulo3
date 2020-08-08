import * as fs from 'fs';

var readlineSync = require('readline-sync');

class Motor {

    private oil: string;
    private Qvalvulas: number;

    constructor(combustible: string, cantValvulas: number) {
        this.oil = combustible;
        this.Qvalvulas = cantValvulas;
    }

    public setOil(fuel: string): void {
        this.oil = fuel;
    }

    public getOil(): string {
        return this.oil;
    }

    public setValvulas(cantidadValvulas: number): void {
        this.Qvalvulas = cantidadValvulas;
    }

    public getValvulas(): number {
        return this.Qvalvulas;;
    }

}

class Rueda {

    private size: number;

    constructor(tamaño: number) {
        this.size = tamaño;
    }

    public setSize(dimension: number): void {
        this.size = dimension;
    }

    public getSize(): number {
        return this.size;
    }

}



class Auto {

    private brand: string;
    private year: number;
    private motor: Motor;
    private ruedas: Rueda[];

    constructor(marca: string, año: number, motor: Motor, rodado?: Rueda[]) {
        this.brand = marca;
        this.year = año;
        this.motor = motor;
        this.ruedas = rodado;
    }
    public getBrand(): string {
        return this.brand;
    }
    public setBrand(brand: string): void {
        this.brand = brand;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public getMotor(): Motor {
        return this.motor;

    }

    public getRuedas(position: number): Rueda {
        return this.ruedas[position];

    }


    public getRuedasLength(): number {

        return this.ruedas.length;
    }

}


class GestorDeArchivos {

    private stringArray: string[];

    constructor(txtFileLocation: string) {

        let txtFile: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.stringArray = txtFile.split(';');
    }


    public printStringArray(): void {
        console.log(this.stringArray);
    }

    public getStringArray(): string[] {
        return this.stringArray;
    }

}


function createAuto(auto: string, arrAutos: Array<Auto>): void {

    let carAtributes = auto.split(',');
    let brand: string = carAtributes[0];
    let year: number = Number(carAtributes[1])
    let motor: Motor = new Motor(carAtributes[2], Number(carAtributes[3]));
    let rueda1: Rueda = new Rueda(Number(carAtributes[4]));
    let rueda2: Rueda = new Rueda(Number(carAtributes[4]));
    let rueda3: Rueda = new Rueda(Number(carAtributes[4]));
    let rueda4: Rueda = new Rueda(Number(carAtributes[4]));
    let ruedas: Rueda[] = []
    ruedas.push(rueda1);
    ruedas.push(rueda2);
    ruedas.push(rueda3);
    ruedas.push(rueda4);
    let newCar: Auto = new Auto(brand, year, motor, ruedas);
    arrAutos.push(newCar);

}


function printAutosList(arrAutos: Array<Auto>): void {

    for (let i: number = 0; i < arrAutos.length; i++) {
        console.log(arrAutos[i]);
    }


}


function selectCar(arrAutos: Array<Auto>, position: number): Auto {

    if (position < arrAutos.length) {
        return arrAutos[position];
    }
    else {
        console.log("Insert valid position");
    }

}

function checkCar(autoSeleccionado: Auto): void {

    let option: number = readlineSync.question("Which feature do you want to know about the selected car? Press 1 to know the brand, 2 to know the model, 3 to know about the motor, 4 if you want to know something about the wheels, 0 to exit ");

    while (option != 0) {

        if(option==1) {
                let selecteBrand: string = autoSeleccionado.getBrand();
                console.log("the brand of the selected car is " + selecteBrand)
        }
        else if(option==2){
                let selectedModel: number = autoSeleccionado.getYear();
                console.log("the model of the selected car is " + selectedModel);
        }
        else if(option==3){
                let selectedMotor: Motor = autoSeleccionado.getMotor();
                let MotorOption: number = readlineSync.question("Press 1 to show what kind of fuel does the car use, 2 to show how many valves does the engine have ");
                if (MotorOption == 1) {
                    console.log("The car is using " + selectedMotor.getOil());
                }
                if (MotorOption == 2) {
                    console.log("The car has " + selectedMotor.getValvulas() + " valves");
                }
                
                }
        else if(option==4){
                 console.log("the car is using whells number " + autoSeleccionado.getRuedas(1).getSize());
        }
        option = readlineSync.question("Which feature do you want to know about the selected car? Press 1 to know the brand, 2 to know the model, 3 to know about the motor, 4 if you want to know something about the wheels, 0 to exit ");
    }

}

function editCar(arrAutos:Array<Auto>,position:number): void {
  
    let brand:string= readlineSync.question("Insert brand of the new car ");
    let year:number=readlineSync.questionInt("Insert model of the new car ");
    let oil:string=readlineSync.question("Insert kind of oil for the new car ");
    let QValve:number=readlineSync.questionInt("Insert Q of valves for the motor of the new car ");
    let motor:Motor =new Motor(oil,QValve);
    let rodado: Rueda[]=[];
    let sizeRueda:number=readlineSync.questionInt("Insert size of the wheels ");

    for(let i:number=0; i<4;i++){
    let wheel: Rueda = new Rueda(sizeRueda);
    rodado.push(wheel);
    }

    let newCar:Auto =new Auto(brand,year,motor,rodado);

    delete arrAutos[position];
    arrAutos[position] = newCar;


}


//Inicio programa
let datos: GestorDeArchivos = new GestorDeArchivos('autosFile.txt');
let arrayAutos: Array<Auto> = [];

//creo array de objetos Auto
for (let i: number = 0; i < datos.getStringArray().length; i++) {

    createAuto(datos.getStringArray()[i], arrayAutos);

}


let option: number;

option = readlineSync.questionInt("Wich option do you want to use? press 1 for for print all the registy, 2 to select one specific car and see their features, 3 for edit a car , 0 for exit ");

while (option != 0) {

    if (option == 1) {
        printAutosList(arrayAutos);
    }
    else if (option == 2) {
        let position: number = readlineSync.questionInt("Insert position of the car you want to search ")
        let selectedCar: Auto = selectCar(arrayAutos, position);
        checkCar(selectedCar);
    }
     else if (option == 3) {
         let position:number = readlineSync.questionInt("Insert position of the car you want to edit ")
         editCar(arrayAutos,position);
         
     }
 
    option = readlineSync.questionInt("Wich option do you want to use? press 1 for for print all the registy, 2 to select one specific car and see their features, 3 for edit a car , 0 for exit ");

}

