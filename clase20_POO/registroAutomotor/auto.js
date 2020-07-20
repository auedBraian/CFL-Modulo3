"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require('readline-sync');
var Auto = /** @class */ (function () {
    function Auto(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
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
        var i = 0;
        for (var i_1 = 0; i_1 < this.autos.length; i_1++) {
            if (this.autos[i_1].getBrand() == auto.getBrand() && this.autos[i_1].getModel() == auto.getModel() && this.autos[i_1].getYear() == auto.getYear() && this.autos[i_1].getColor() == auto.getColor()) {
                position = i_1;
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
            delete this.autos[position];
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
        var auto1 = new Auto(arrayAuto[0], arrayAuto[1], Number(arrayAuto[2]), arrayAuto[3]);
        registry.push(auto1);
    }
    return registry;
}
function completeCar() {
    var brand = readlineSync.question("insert brand ");
    var model = readlineSync.question("insert model ");
    var year = readlineSync.questionInt("insert year ");
    var color = readlineSync.question("insert color ");
    var car1 = new Auto(brand, model, year, color);
    return car1;
}
var car = fs.readFileSync('automotorList.txt', 'utf8');
var cars = [];
cars = car.split(';');
var registry = new AutomotorRegistry(completeRegistry(cars));
var option = 0;
console.log(registry);
option = readlineSync.questionInt("Wich option do you want to use? press 1 for search, 2 for insert, 3 for delete, 4 for print all the registy, 0 for exit ");
while (option != 0) {
    if (option == 1) {
        var auto1 = completeCar();
        registry.searchAuto(auto1);
    }
    else if (option == 2) {
        var auto1 = completeCar();
        registry.insertAuto(auto1);
    }
    else if (option == 3) {
        var auto1 = completeCar();
        registry.deleteAuto(auto1);
    }
    else if (option == 4) {
        console.log(registry);
    }
    option = readlineSync.questionInt("Wich option do you want to use? press 1 for search, 2 for insert, 3 for delete, 4 for print all the registy, 0 for exit ");
}
