
import * as fs from 'fs';
import { Auto } from './auto'
import { AutomotorRegistry } from './automotorRegistry'
import { FileManager } from './fileManager'

var readlineSync = require('readline-sync');



//Funcion que recibe un arreglo de strings, los transforma en elementos del tipo Auto, los insertar en el registro automotor que es un arreglo de elementos de tipo Auto
function completeRegistry(arrayCars: string[]): Auto[] {

    let registry: Auto[] = [];

    for (let i: number = 0; i < arrayCars.length; i++) {
        let arrayAuto: string[];
        arrayAuto = arrayCars[i].split(',');
        let auto1: Auto = new Auto(arrayAuto[0], arrayAuto[1], Number(arrayAuto[2]), arrayAuto[3], arrayAuto[4]);
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


//recibo todo el registro automotor
function updateTXTFile(registroAutomotor: AutomotorRegistry): void {

    let txtFile: string = '';

    for (let i: number = 0; i < registroAutomotor.getAutosLength(); i++) {

        //obtengo uno a uno los objetos Auto del registro
        let auto: Auto = registroAutomotor.getAutos()[i];

        if (auto.getBrand() == '') {

        }
        else {
            //los valores de cada auto los voy almacenando en esta variable de tipo string
            txtFile = txtFile + auto.getBrand() + ',' + auto.getModel() + ',' + auto.getYear().toString() + ',' + auto.getColor() + ',' + auto.getCarRegistration() + ';';
        }
    }

    //actualizo el txt
    fs.writeFile('automotorList.txt', txtFile, function (err) {
        if (err) throw err;

    });
}


function printRegistry(registry:AutomotorRegistry):void{

    for (let i: number = 0; i < registry.getAutosLength(); i++) {

        if (registry.getAutos()[i].getBrand() == '') { //este if evita imprimir el ultimo elemento que seria vacio
        } else {
            console.log(registry.getAutos()[i]); // imprimo el registro completo
        }
    }


}




let car: string = 'automotorList.txt';
let txtFile: FileManager = new FileManager(car);
let cars: string[] = [];
cars = txtFile.getStringArray();


//creo el registro automotor, y la funcion completeRegisty va a generar el arreglo de elementos de tipo Auto para llenar ese registro
let registry: AutomotorRegistry = new AutomotorRegistry(completeRegistry(cars));

let option: number = 0;

printRegistry(registry); //imprimo registro cuando inicia programa

option = readlineSync.questionInt("Wich option do you want to use? press 1 for search by features,2 for search by car registration, 3 for insert, 4 for delete, 5 for print all the registy, 0 for exit ");

while (option != 0) {

    let auto1: Auto;
    if (option == 1) {
        auto1 = completeCar(); //creo un nuevo auto
        registry.searchAuto(auto1); //envio el auto creado al registro para ver si coincide con alguno de los elementos del registro
    }
    else if (option == 2) {
        let carReg: string = readlineSync.question("insert car registration ");
        carReg.toUpperCase;
        registry.searchAutobyCarRegistration(carReg); //busco un elemento en el registro con la patente del elemento
    }
    else if (option == 3) {
        auto1 = completeCar();
        registry.insertAuto(auto1); //inserto un elemento Auto en el registro
        updateTXTFile(registry);
    }
    else if (option == 4) {
        auto1 = completeCar();
        registry.deleteAuto(auto1); //busco un elemento del registro y lo elimino
        updateTXTFile(registry);
    }
    else if (option == 5) {

        printRegistry(registry) //imprimo el registro
        updateTXTFile(registry); //actualizo el txt
    }

    option = readlineSync.questionInt("Wich option do you want to use? press 1 for search by features,2 for search by car registration, 3 for insert, 4 for delete, 5 for print all the registy, 0 for exit ");
}

updateTXTFile(registry);
