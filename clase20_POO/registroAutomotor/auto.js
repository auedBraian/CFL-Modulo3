"use strict";
exports.__esModule = true;
var fs = require("fs");
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
    Auto.prototype.compare = function (auto1, auto2) {
        if (auto1.getBrand() == auto2.getBrand() && auto1.getModel() == auto2.getModel() && auto1.getYear() == auto2.getYear() && auto1.getColor() == auto2.getColor() && auto1.getCarRegistration() == auto2.getCarRegistration()) {
            return true;
        }
    };
    return Auto;
}());
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
    AutomotorRegistry.prototype.deleteAuto = function (auto) {
        var position = -1;
        position = this.searchAuto(auto);
        if (position == -1) {
        }
        else {
            this.autos.splice(position, 1);
        }
    };
    AutomotorRegistry.prototype.insertAuto = function (auto) {
        this.autos.push(auto);
    };
    AutomotorRegistry.prototype.getAutosLength = function () {
        return this.autos.length;
    };
    return AutomotorRegistry;
}());
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
function completeCar() {
    var brand = readlineSync.question("insert brand ");
    var model = readlineSync.question("insert model ");
    var year = readlineSync.questionInt("insert year ");
    var color = readlineSync.question("insert color ");
    var registration = readlineSync.question("insert car registration ");
    var car1 = new Auto(brand, model, year, color, registration);
    return car1;
}
var car = fs.readFileSync('automotorList.txt', 'utf8');
var cars = [];
cars = car.split(';');
var registry = new AutomotorRegistry(completeRegistry(cars));
var option = 0;
console.log(registry);
option = readlineSync.questionInt("Wich option do you want to use? press 1 for search by features,2 for search by car registration, 3 for insert, 4 for delete, 5 for print all the registy, 0 for exit ");
while (option != 0) {
    var auto1 = void 0;
    if (option == 1) {
        auto1 = completeCar();
        registry.searchAuto(auto1);
    }
    else if (option == 2) {
        var carReg = readlineSync.question("insert car registration ");
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
