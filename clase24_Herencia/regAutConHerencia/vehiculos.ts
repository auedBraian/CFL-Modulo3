

var readlineSync = require('readline-sync');

//Clase Vehicles --> Clase padre, define atributos generales y metodos que van a tener sus hijos

class Vehicles {


    protected vehicleRegistration: string;
    protected brand: string;

    constructor(placa: string, marcaVehiculo: string) {
        this.vehicleRegistration = placa;
        this.brand = marcaVehiculo;
    }


    public setPatente(patente: string): void {
        this.vehicleRegistration = patente;
    }

    public getPatente(): string {
        return this.vehicleRegistration;
    }

    public setMarca(marca: string): void {
        this.brand = marca;
    }

    public getMarca(): string {
        return this.brand;
    }


    public compare(vehicle1: Vehicles, vehicle2: Vehicles): boolean {


        if (vehicle1.getPatente() === vehicle2.getPatente()) {

            return true;

        }

    }
}


//Clase Auto --> Clase  que hereda de Vehicles sus atributos y metodos; y tambien define atributos y metodos propoios

class Auto extends Vehicles {

    private model: string;

    public constructor(placa: string, marcaVehiculo: string, tipoModelo: string) {
        super(placa, marcaVehiculo);
        this.model = tipoModelo;
    }

    public setModel(modelo: string): void {
        this.model = modelo;
    }

    public getModel(): string {
        return this.model;
    }

}

//Clase Motorbike --> Clase  que hereda de Vehicles sus atributos y metodos; y tambien define atributos y metodos propoios
class Motorbike extends Vehicles {

    private displacement: number;
    private type: string; //(urbana/deportiva)

    public constructor(placa: string, marcaVehiculo: string, nroCilindro: number, tipo: string) {
        super(placa, marcaVehiculo);
        this.displacement = nroCilindro;
        this.type = tipo;
    }

    public setType(tipo: string): void {
        this.type = tipo;
    }

    public getType(): string {
        return this.type;
    }

    public setDisplacement(cilindrada: number): void {
        this.displacement = cilindrada;
    }

    public getDisplacement(): number {
        return this.displacement;
    }

}

//Clase Truck --> Clase  que hereda de Vehicles sus atributos y metodos; y tambien define atributos y metodos propoios

class Truck extends Vehicles {

    private capacity: number;

    public constructor(placa: string, marcaVehiculo: string, capacidad: number) {
        super(placa, marcaVehiculo);
        this.capacity = capacidad;
    }

    public setCapacity(capacidad: number): void {
        this.capacity = capacidad;
    }

    public getCapacity(): number {
        return this.capacity;
    }

}

/*Clase AutomotorRegistry --> su propiedad es un arreglo de elementos de tipo Vehiculos. Alli se almacenaran los elementos del registro. Tiene metodos para buscar, eliminar, editar, y devolver elementos del arreglo*/

class AutomotorRegistry {

    protected vehicles: Vehicles[] = [];

    constructor(vehicles?: Vehicles[]) {

        if (vehicles == undefined || vehicles == null) {

            this.vehicles = [];
        }
        else {
            this.vehicles = vehicles;
        }
    }

    //recibe un elemento del tipo vehiculo, lo busca en el registro y si esta devuelve la posicion del mismo.
    searchVehicle(vehicle: Vehicles): number {

        let position: number = -1;

        for (let i: number = 0; i < this.vehicles.length; i++) {

            let a: boolean = vehicle.compare(this.vehicles[i], vehicle);
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


    deleteVehicle(position: number): void {

        this.vehicles.splice(position, 1);

    }

    insertVehicle(vehicle: Vehicles): void {

        this.vehicles.push(vehicle);
    }

    getVehicleLength(): number {
        return this.vehicles.length;
    }


}

//funcion utilizada para crear un objeto de tipo Auto y devolverlo
function completeCar(): Auto {
    let vehicleRegistration: string = readlineSync.question("insert vehicle registration ");
    let model: string = readlineSync.question("insert model ");
    let brand: string = readlineSync.question("insert brand ");
    let vehiculo: Auto = new Auto(vehicleRegistration, brand, model);

    return vehiculo;
}

//funcion utilizada para crear un objeto de tipo Truck y devolverlo
function completeTruck(): Truck {
    let vehicleRegistration: string = readlineSync.question("insert vehicle registration ");
    let brand: string = readlineSync.question("insert brand ");
    let capacidad: number = readlineSync.questionInt("insert capacity (number) ");
    let camion: Truck = new Truck(vehicleRegistration, brand, capacidad);

    return camion;
}

//funcion utilizada para crear un objeto de tipo Motorbike y devolverlo
function completeMotorbike(): Motorbike {
    let vehicleRegistration: string = readlineSync.question("insert vehicle registration ");
    let brand: string = readlineSync.question("insert brand ");
    let type: string = readlineSync.question("insert type: urban/sportive ");
    let displacement: number = readlineSync.questionInt("insert displacement (number) ");
    let moto: Motorbike = new Motorbike(vehicleRegistration, brand, displacement, type);

    return moto;
}


//funcion utilizada para buscar un elemento determinado dentro del registro
function searchTypeOfVehicle(searchingOption: number): Vehicles {

    let searchingCar: Vehicles;

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


let option: number = 0;
let registry: AutomotorRegistry = new AutomotorRegistry();

option = readlineSync.questionInt("Wich option do you want to use? press 1 for search a vehicle, 2 for insert, 3 for delete, 4 for print all the registy, 0 for exit ");

while (option != 0) {

    //si el usuario presiona 1, se abre el menu para buscar un determinado vehiculo
    if (option == 1) {
        let searchOption: number = readlineSync.questionInt("Wich kind of vehicle do you want to search? press 1 por auto, 2 for motorbike, 3 for truck ");

        //searchVehicle devuelve el vehiculo que busca el usuario
        let searchingVehicle: Vehicles = searchTypeOfVehicle(searchOption);

        //registro ejecuta la funcion seachVehicle y le envia el vehiculo del usuario
        registry.searchVehicle(searchingVehicle);
    }
    else if (option == 2) {

        let vehicleOption: number = readlineSync.questionInt("Press 1 to insert an Auto, 2 to insert Motorbike, 3 to insert truck ");
        switch (vehicleOption) {
            case 1:
                let auto: Auto = completeCar(); //genero un nuevo elemento Auto
                registry.insertVehicle(auto); //inserto el elemento generado anteriormente en el registro
                break;
            case 2:
                let moto: Motorbike = completeMotorbike(); //genero un nuevo elemento Motorbike
                registry.insertVehicle(moto);//inserto el elemento generado anteriormente en el registro
                break;
            case 3:
                let truck: Truck = completeTruck();//genero un nuevo elemento Truck
                registry.insertVehicle(truck);//inserto el elemento generado anteriormente en el registro
                break;
        }
    }
    else if (option == 3) {

        let deleteOption: number = readlineSync.questionInt("Wich position of Registry do you want to delete? ");
        if (deleteOption >= 0 && deleteOption <= registry.getVehicleLength()-1) {
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