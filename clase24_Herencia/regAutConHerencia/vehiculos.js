var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var readlineSync = require('readline-sync');
//Clase Vehicles --> Clase padre, define atributos generales y metodos que van a tener sus hijos
var Vehicles = /** @class */ (function () {
    function Vehicles(placa, marcaVehiculo) {
        this.vehicleRegistration = placa;
        this.brand = marcaVehiculo;
    }
    Vehicles.prototype.setPatente = function (patente) {
        this.vehicleRegistration = patente;
    };
    Vehicles.prototype.getPatente = function () {
        return this.vehicleRegistration;
    };
    Vehicles.prototype.setMarca = function (marca) {
        this.brand = marca;
    };
    Vehicles.prototype.getMarca = function () {
        return this.brand;
    };
    //recibe dos elementos del tipo vehicle y comprara si sus patentes son iguales. En caso de serlo devuelve true.
    Vehicles.prototype.compare = function (vehicle1, vehicle2) {
        if (vehicle1.getPatente() === vehicle2.getPatente()) {
            return true;
        }
    };
    return Vehicles;
}());
//Clase Auto --> Clase  que hereda de Vehicles sus atributos y metodos; y tambien define atributos y metodos propoios
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(placa, marcaVehiculo, tipoModelo) {
        var _this = _super.call(this, placa, marcaVehiculo) || this;
        _this.model = tipoModelo;
        return _this;
    }
    Auto.prototype.setModel = function (modelo) {
        this.model = modelo;
    };
    Auto.prototype.getModel = function () {
        return this.model;
    };
    return Auto;
}(Vehicles));
//Clase Motorbike --> Clase  que hereda de Vehicles sus atributos y metodos; y tambien define atributos y metodos propoios
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(placa, marcaVehiculo, nroCilindro, tipo) {
        var _this = _super.call(this, placa, marcaVehiculo) || this;
        _this.displacement = nroCilindro;
        _this.type = tipo;
        return _this;
    }
    Motorbike.prototype.setType = function (tipo) {
        this.type = tipo;
    };
    Motorbike.prototype.getType = function () {
        return this.type;
    };
    Motorbike.prototype.setDisplacement = function (cilindrada) {
        this.displacement = cilindrada;
    };
    Motorbike.prototype.getDisplacement = function () {
        return this.displacement;
    };
    return Motorbike;
}(Vehicles));
//Clase Truck --> Clase  que hereda de Vehicles sus atributos y metodos; y tambien define atributos y metodos propoios
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(placa, marcaVehiculo, capacidad) {
        var _this = _super.call(this, placa, marcaVehiculo) || this;
        _this.capacity = capacidad;
        return _this;
    }
    Truck.prototype.setCapacity = function (capacidad) {
        this.capacity = capacidad;
    };
    Truck.prototype.getCapacity = function () {
        return this.capacity;
    };
    return Truck;
}(Vehicles));
/*Clase AutomotorRegistry --> su propiedad es un arreglo de elementos de tipo Vehiculos. Alli se almacenaran los elementos del registro. Tiene metodos para buscar, eliminar, editar, y devolver elementos del arreglo*/
var AutomotorRegistry = /** @class */ (function () {
    function AutomotorRegistry(vehicles) {
        this.vehicles = [];
        if (vehicles == undefined || vehicles == null) {
            this.vehicles = [];
        }
        else {
            this.vehicles = vehicles;
        }
    }
    //recibe un elemento del tipo vehiculo, lo busca en el registro y si esta devuelve la posicion del mismo.
    AutomotorRegistry.prototype.searchVehicle = function (vehicle) {
        var position = -1;
        for (var i = 0; i < this.vehicles.length; i++) {
            var a = vehicle.compare(this.vehicles[i], vehicle);
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
    AutomotorRegistry.prototype.deleteVehicle = function (position) {
        this.vehicles.splice(position, 1);
    };
    AutomotorRegistry.prototype.insertVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    AutomotorRegistry.prototype.getVehicleLength = function () {
        return this.vehicles.length;
    };
    return AutomotorRegistry;
}());
//funcion utilizada para crear un objeto de tipo Auto y devolverlo
function completeCar() {
    var vehicleRegistration = readlineSync.question("insert vehicle registration ");
    var model = readlineSync.question("insert model ");
    var brand = readlineSync.question("insert brand ");
    var vehiculo = new Auto(vehicleRegistration, brand, model);
    return vehiculo;
}
//funcion utilizada para crear un objeto de tipo Truck y devolverlo
function completeTruck() {
    var vehicleRegistration = readlineSync.question("insert vehicle registration ");
    var brand = readlineSync.question("insert brand ");
    var capacidad = readlineSync.questionInt("insert capacity (number) ");
    var camion = new Truck(vehicleRegistration, brand, capacidad);
    return camion;
}
//funcion utilizada para crear un objeto de tipo Motorbike y devolverlo
function completeMotorbike() {
    var vehicleRegistration = readlineSync.question("insert vehicle registration ");
    var brand = readlineSync.question("insert brand ");
    var type = readlineSync.question("insert type: urban/sportive ");
    var displacement = readlineSync.questionInt("insert displacement (number) ");
    var moto = new Motorbike(vehicleRegistration, brand, displacement, type);
    return moto;
}
//funcion utilizada para buscar un elemento determinado dentro del registro
function searchTypeOfVehicle(searchingOption) {
    var searchingCar;
    switch (searchingOption) {
        case 1:
            searchingCar = completeCar();
            break;
        case 2:
            searchingCar = completeMotorbike();
            break;
        case 3:
            searchingCar = completeTruck();
            break;
    }
    return searchingCar;
}
var option = 0;
var registry = new AutomotorRegistry();
option = readlineSync.questionInt("Wich option do you want to use? press 1 for search a vehicle, 2 for insert, 3 for delete, 4 for print all the registy, 0 for exit ");
while (option != 0) {
    //si el usuario presiona 1, se abre el menu para buscar un determinado vehiculo
    if (option == 1) {
        var searchOption = readlineSync.questionInt("Wich kind of vehicle do you want to search? press 1 por auto, 2 for motorbike, 3 for truck ");
        //searchVehicle devuelve el vehiculo que busca el usuario
        var searchingVehicle = searchTypeOfVehicle(searchOption);
        //registro ejecuta la funcion seachVehicle y le envia el vehiculo del usuario
        registry.searchVehicle(searchingVehicle);
    }
    else if (option == 2) {
        var vehicleOption = readlineSync.questionInt("Press 1 to insert an Auto, 2 to insert Motorbike, 3 to insert truck ");
        switch (vehicleOption) {
            case 1:
                var auto = completeCar(); //genero un nuevo elemento Auto
                registry.insertVehicle(auto); //inserto el elemento generado anteriormente en el registro
                break;
            case 2:
                var moto = completeMotorbike(); //genero un nuevo elemento Motorbike
                registry.insertVehicle(moto); //inserto el elemento generado anteriormente en el registro
                break;
            case 3:
                var truck = completeTruck(); //genero un nuevo elemento Truck
                registry.insertVehicle(truck); //inserto el elemento generado anteriormente en el registro
                break;
        }
    }
    else if (option == 3) {
        var deleteOption = readlineSync.questionInt("Wich position of Registry do you want to delete? ");
        if (deleteOption >= 0 && deleteOption <= registry.getVehicleLength() - 1) {
            registry.deleteVehicle(deleteOption); //elimino el elemento del registro en la posicion indicada por el usuario
        }
        else {
            console.log("Invalid option");
        }
    }
    else if (option == 4) {
        console.log(registry); //imprimo el registro completo
    }
    option = readlineSync.questionInt("Wich option do you want to use? press 1 for search a vehicle, 2 for insert, 3 for delete, 4 for print all the registy, 0 for exit ");
}
