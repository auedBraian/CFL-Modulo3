"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require('readline-sync');
//Clase Motor con sus variables y metodos
var Motor = /** @class */ (function () {
    function Motor(combustible, cantValvulas) {
        this.oil = combustible;
        this.Qvalvulas = cantValvulas;
    }
    Motor.prototype.setOil = function (fuel) {
        this.oil = fuel;
    };
    Motor.prototype.getOil = function () {
        return this.oil;
    };
    Motor.prototype.setValvulas = function (cantidadValvulas) {
        this.Qvalvulas = cantidadValvulas;
    };
    Motor.prototype.getValvulas = function () {
        return this.Qvalvulas;
        ;
    };
    return Motor;
}());
//Clase Rueda con sus variables y metodos
var Rueda = /** @class */ (function () {
    function Rueda(tamaño) {
        this.size = tamaño;
    }
    Rueda.prototype.setSize = function (dimension) {
        this.size = dimension;
    };
    Rueda.prototype.getSize = function () {
        return this.size;
    };
    return Rueda;
}());
/*Clase Auto con sus variables y metodos, compuesta por un atributo de clase motor y un arreglo de clase RUEDA*/
var Auto = /** @class */ (function () {
    function Auto(marca, año, motor, rodado) {
        this.brand = marca;
        this.year = año;
        this.motor = motor;
        this.ruedas = rodado;
    }
    Auto.prototype.getBrand = function () {
        return this.brand;
    };
    Auto.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Auto.prototype.getYear = function () {
        return this.year;
    };
    Auto.prototype.setYear = function (year) {
        this.year = year;
    };
    Auto.prototype.getMotor = function () {
        return this.motor;
    };
    Auto.prototype.getRuedas = function (position) {
        return this.ruedas[position];
    };
    Auto.prototype.getRuedasLength = function () {
        return this.ruedas.length;
    };
    return Auto;
}());
/*Clase GestorDeArchivos, tiene los metodos para recibir informacion de un txt y convertir esa informacion a objetos de tipo Auto*/
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        //recibe la direccion del txt
        var txtFile = fs.readFileSync(txtFileLocation, 'utf-8');
        //separa ese txt en elementos  y crea un arreglo de strings
        this.stringArray = txtFile.split(';');
    }
    GestorDeArchivos.prototype.printStringArray = function () {
        console.log(this.stringArray);
    };
    //envia el arreglo de strings creado para luego convertir los elementos en objetos de tipo Auto
    GestorDeArchivos.prototype.getStringArray = function () {
        return this.stringArray;
    };
    return GestorDeArchivos;
}());
//recibe un elemento de tipo string y un arreglo de Auto vacio
function createAuto(auto, arrAutos) {
    //transformo el elemento de tipo string en un objeto de tipo Auto
    var carAtributes = auto.split(',');
    var brand = carAtributes[0];
    var year = Number(carAtributes[1]);
    var motor = new Motor(carAtributes[2], Number(carAtributes[3]));
    var rueda1 = new Rueda(Number(carAtributes[4]));
    var rueda2 = new Rueda(Number(carAtributes[4]));
    var rueda3 = new Rueda(Number(carAtributes[4]));
    var rueda4 = new Rueda(Number(carAtributes[4]));
    var ruedas = [];
    ruedas.push(rueda1);
    ruedas.push(rueda2);
    ruedas.push(rueda3);
    ruedas.push(rueda4);
    var newCar = new Auto(brand, year, motor, ruedas);
    //inserto el elemento de tipo Auto en el arreglo recibido
    arrAutos.push(newCar);
}
//esta funcion recibe un arreglo de elementos del tipo Auto y los imprime uno a uno por pantalla
function printAutosList(arrAutos) {
    for (var i = 0; i < arrAutos.length; i++) {
        console.log(arrAutos[i]);
    }
}
/*esta funcion recibe un arreglo de elementos del tipo Auto y una posicion, y devuelve el elemento de esa posicion*/
function selectCar(arrAutos, position) {
    if (position < arrAutos.length) {
        return arrAutos[position];
    }
    else {
        console.log("Insert valid position");
    }
}
/*esta funcion recibe un objeto de tipo Auto y, a medida que el usuario va seleccionando las diferentes opciones, va devolviendo los diferentes atributos del objeto recibido*/
function checkCar(autoSeleccionado) {
    var option = readlineSync.question("Which feature do you want to know about the selected car? Press 1 to know the brand, 2 to know the model, 3 to know about the motor, 4 if you want to know something about the wheels, 0 to exit ");
    while (option != 0) {
        if (option == 1) {
            var selecteBrand = autoSeleccionado.getBrand();
            console.log("the brand of the selected car is " + selecteBrand);
        }
        else if (option == 2) {
            var selectedModel = autoSeleccionado.getYear();
            console.log("the model of the selected car is " + selectedModel);
        }
        else if (option == 3) {
            var selectedMotor = autoSeleccionado.getMotor();
            var MotorOption = readlineSync.question("Press 1 to show what kind of fuel does the car use, 2 to show how many valves does the engine have ");
            if (MotorOption == 1) {
                console.log("The car is using " + selectedMotor.getOil());
            }
            if (MotorOption == 2) {
                console.log("The car has " + selectedMotor.getValvulas() + " valves");
            }
        }
        else if (option == 4) {
            console.log("the car is using whells number " + autoSeleccionado.getRuedas(1).getSize());
        }
        option = readlineSync.question("Which feature do you want to know about the selected car? Press 1 to know the brand, 2 to know the model, 3 to know about the motor, 4 if you want to know something about the wheels, 0 to exit ");
    }
}
/*esta funcion recibe un arreglo de elementos del tipo Auto y una posicion, crea un objeto de tipo auto, elimina el elemento del arreglo en la posicion recibida, y por ultimo inserta el elemento creado en esa posicion */
function editCar(arrAutos, position) {
    var brand = readlineSync.question("Insert brand of the new car ");
    var year = readlineSync.questionInt("Insert model of the new car ");
    var oil = readlineSync.question("Insert kind of oil for the new car ");
    var QValve = readlineSync.questionInt("Insert Q of valves for the motor of the new car ");
    var motor = new Motor(oil, QValve);
    var rodado = [];
    var sizeRueda = readlineSync.questionInt("Insert size of the wheels ");
    for (var i = 0; i < 4; i++) {
        var wheel = new Rueda(sizeRueda);
        rodado.push(wheel);
    }
    var newCar = new Auto(brand, year, motor, rodado);
    delete arrAutos[position];
    arrAutos[position] = newCar;
}
//Inicio programa
var datos = new GestorDeArchivos('autosFile.txt');
var arrayAutos = [];
//creo array de objetos Auto
for (var i = 0; i < datos.getStringArray().length; i++) {
    /*envio uno a uno los elementos de tipo string del arreglo "datos" y el arreglos de autos vacio a la funcion createAuto, esa funcion toma el elemento recibido, lo transforma en un objetos de tipo Auto y lo pushea al arrayAutos*/
    createAuto(datos.getStringArray()[i], arrayAutos);
}
var option;
option = readlineSync.questionInt("Wich option do you want to use? press 1 for for print all the registy, 2 to select one specific car and see their features, 3 for edit a car , 0 for exit ");
while (option != 0) {
    if (option == 1) {
        printAutosList(arrayAutos); //esta funcion recibe el arreglo de autos y los va imprimiendo
    }
    else if (option == 2) {
        var position = readlineSync.questionInt("Insert position of the car you want to search ");
        var selectedCar = selectCar(arrayAutos, position); //esta funcion recibe el arreglo de autos y una posicion, y devuelve el elemento de tipo Auto de esa posicion
        checkCar(selectedCar); //Esta funcion recibe el elemento recibido en el metodo anterior y alli el usuario va a poder ver los atributos de este elemento
    }
    else if (option == 3) {
        var position = readlineSync.questionInt("Insert position of the car you want to edit ");
        editCar(arrayAutos, position); //esta funcion recibe el arreglo de elementos de tipo Auto y una posicion, y edita el elemento de esa posicion
    }
    option = readlineSync.questionInt("Wich option do you want to use? press 1 for for print all the registy, 2 to select one specific car and see their features, 3 for edit a car , 0 for exit ");
}
