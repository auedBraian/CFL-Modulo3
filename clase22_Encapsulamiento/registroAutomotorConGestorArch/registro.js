"use strict";
exports.__esModule = true;
var fs = require("fs");
//Clase Auto con sus variables y metodos
var readlineSync = require('readline-sync');
var Auto = /** @class */ (function () {
    function Auto(brand, model, year, color, patente) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.carRegistration = patente;
    }
    Auto.prototype.getBrand = function () {
        return this.brand;
    };
    Auto.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Auto.prototype.getModel = function () {
        return this.model;
    };
    Auto.prototype.setModel = function (model) {
        this.model = model;
    };
    Auto.prototype.getYear = function () {
        return this.year;
    };
    Auto.prototype.setYear = function (year) {
        this.year = year;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    Auto.prototype.setColor = function (color) {
        this.color = color;
    };
    Auto.prototype.getCarRegistration = function () {
        return this.carRegistration;
    };
    Auto.prototype.setCarRegistration = function (registration) {
        this.carRegistration = registration;
    };
    //funcion que recibe 2 elementos del tipo Auto y compara si son iguales. Si son iguales devuelve true
    Auto.prototype.compare = function (auto1, auto2) {
        if (auto1.getBrand() == auto2.getBrand() && auto1.getModel() == auto2.getModel() && auto1.getYear() == auto2.getYear() && auto1.getColor() == auto2.getColor() && auto1.getCarRegistration() == auto2.getCarRegistration()) {
            return true;
        }
    };
    return Auto;
}());
//Clase AutomotorRegistry con sus variables y metodos
var AutomotorRegistry = /** @class */ (function () {
    function AutomotorRegistry(autos) {
        this.autos = [];
        if (autos == undefined || autos == null) {
            this.autos = [];
        }
        else {
            this.autos = autos;
        }
    }
    //funcion que recibe un elemento de tipo Auto y busca en el registro si el elemento esta. Si esta devuelve la posicion del mismo. Para buscarlo utiliza la funcion compare de la clase Auto
    AutomotorRegistry.prototype.searchAuto = function (auto) {
        var position = -1;
        for (var i = 0; i < this.autos.length; i++) {
            var a = auto.compare(this.autos[i], auto);
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
    };
    //funcion que recibe una patente, y busca en el registro si algun elemento del tipo Auto posee esa patente. Si esta devuelve la posicion de ese elemento, sino devuelve -1
    AutomotorRegistry.prototype.searchAutobyCarRegistration = function (carReg) {
        var position = -1;
        for (var i = 0; i < this.autos.length; i++) {
            if (this.autos[i].getCarRegistration() === carReg) {
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
    };
    //funcion que recibe un elemento de tipo Auto, lo busca en el registro y si esta lo elimina
    AutomotorRegistry.prototype.deleteAuto = function (auto) {
        var position = -1;
        position = this.searchAuto(auto);
        if (position == -1) {
        }
        else {
            this.autos.splice(position, 1);
        }
    };
    //funcion que recibe un elemento de tipo Auto y lo inserta en el registro
    AutomotorRegistry.prototype.insertAuto = function (auto) {
        this.autos.push(auto);
    };
    AutomotorRegistry.prototype.getAutosLength = function () {
        return this.autos.length;
    };
    return AutomotorRegistry;
}());
/*Clase FileManager, tiene los metodos para recibir informacion de un txt y convertir esa informacion a objetos de tipo Auto*/
var FileManager = /** @class */ (function () {
    function FileManager(location) {
        var txtFile = fs.readFileSync(location, 'utf8');
        this.stringArray = txtFile.split(';');
    }
    FileManager.prototype.printStringArray = function () {
        console.log('StringArray content: ' + this.stringArray);
    };
    FileManager.prototype.getStringArray = function () {
        return this.stringArray;
    };
    return FileManager;
}());
//Funcion que recibe un arreglo de strings, los transforma en elementos del tipo Auto, los insertar en el registro automotor que es un arreglo de elementos de tipo Auto
function completeRegistry(arrayCars) {
    var registry = [];
    for (var i = 0; i < arrayCars.length; i++) {
        var arrayAuto = void 0;
        arrayAuto = arrayCars[i].split(',');
        var auto1 = new Auto(arrayAuto[0], arrayAuto[1], Number(arrayAuto[2]), arrayAuto[3], arrayAuto[4]);
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
    var car1 = new Auto(brand, model, year, color, registration);
    return car1;
}
var car = 'automotorList.txt';
var txtFile = new FileManager(car);
var cars = [];
cars = txtFile.getStringArray();
//creo el registro automotor, y la funcion completeRegisty va a generar el arreglo de elementos de tipo Auto para llenar ese registro
var registry = new AutomotorRegistry(completeRegistry(cars));
var option = 0;
console.log(registry);
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
