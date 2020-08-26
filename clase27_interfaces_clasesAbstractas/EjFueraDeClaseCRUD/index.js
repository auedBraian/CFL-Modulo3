"use strict";
exports.__esModule = true;
var fs = require("fs");
var auto_1 = require("./auto");
var automotorRegistry_1 = require("./automotorRegistry");
var fileManager_1 = require("./fileManager");
var readlineSync = require('readline-sync');
//Funcion que recibe un arreglo de strings, los transforma en elementos del tipo Auto, los insertar en el registro automotor que es un arreglo de elementos de tipo Auto
function completeRegistry(arrayCars) {
    var registry = [];
    for (var i = 0; i < arrayCars.length; i++) {
        var arrayAuto = void 0;
        arrayAuto = arrayCars[i].split(',');
        var auto1 = new auto_1.Auto(arrayAuto[0], arrayAuto[1], Number(arrayAuto[2]), arrayAuto[3], arrayAuto[4]);
        registry.push(auto1);
    }
    return registry;
}
//funcion que crea un nuevo auto y lo devuelve
function completeCar() {
    var brand = readlineSync.question("insert brand ");
    var model = readlineSync.question("insert model ");
    var year = readlineSync.questionInt("insert year ");
    var color = readlineSync.question("insert color ");
    var registration = readlineSync.question("insert car registration ");
    var car1 = new auto_1.Auto(brand, model, year, color, registration);
    return car1;
}
//recibo todo el registro automotor
function updateTXTFile(registroAutomotor) {
    var txtFile = '';
    for (var i = 0; i < registroAutomotor.getAutosLength(); i++) {
        //obtengo uno a uno los objetos Auto del registro
        var auto = registroAutomotor.getAutos()[i];
        if (auto.getBrand() == '') {
        }
        else {
            //los valores de cada auto los voy almacenando en esta variable de tipo string
            txtFile = txtFile + auto.getBrand() + ',' + auto.getModel() + ',' + auto.getYear().toString() + ',' + auto.getColor() + ',' + auto.getCarRegistration() + ';';
        }
    }
    //actualizo el txt
    fs.writeFile('automotorList.txt', txtFile, function (err) {
        if (err)
            throw err;
    });
}
function printRegistry(registry) {
    for (var i = 0; i < registry.getAutosLength(); i++) {
        if (registry.getAutos()[i].getBrand() == '') { //este if evita imprimir el ultimo elemento que seria vacio
        }
        else {
            console.log(registry.getAutos()[i]); // imprimo el registro completo
        }
    }
}
var car = 'automotorList.txt';
var txtFile = new fileManager_1.FileManager(car);
var cars = [];
cars = txtFile.getStringArray();
//creo el registro automotor, y la funcion completeRegisty va a generar el arreglo de elementos de tipo Auto para llenar ese registro
var registry = new automotorRegistry_1.AutomotorRegistry(completeRegistry(cars));
var option = 0;
printRegistry(registry); //imprimo registro cuando inicia programa
option = readlineSync.questionInt("Wich option do you want to use? press 1 for search by features,2 for search by car registration, 3 for insert, 4 for delete, 5 for print all the registy, 0 for exit ");
while (option != 0) {
    var auto1 = void 0;
    if (option == 1) {
        auto1 = completeCar(); //creo un nuevo auto
        registry.searchAuto(auto1); //envio el auto creado al registro para ver si coincide con alguno de los elementos del registro
    }
    else if (option == 2) {
        var carReg = readlineSync.question("insert car registration ");
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
        printRegistry(registry); //imprimo el registro
        updateTXTFile(registry); //actualizo el txt
    }
    option = readlineSync.questionInt("Wich option do you want to use? press 1 for search by features,2 for search by car registration, 3 for insert, 4 for delete, 5 for print all the registy, 0 for exit ");
}
updateTXTFile(registry);
