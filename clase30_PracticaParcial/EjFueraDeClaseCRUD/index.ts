
import * as fs from 'fs';
import { Alumno } from './alumno'
import { RegistroAlumnos } from './registroAlumnos'
import { FileManager } from './fileManager'

var readlineSync = require('readline-sync');



//Funcion que recibe un arreglo de strings, los transforma en elementos del tipo Alumno, los inserta en el registro  de alumnos que es un arreglo de elementos de tipo Alumnos
function completarRegistro(arrayAlumnos: string[]): Alumno[] {

    let registro: Alumno[] = [];

    for (let i: number = 0; i < arrayAlumnos.length; i++) {
        let arrayAlumno: string[];
        arrayAlumno = arrayAlumnos[i].split(',');
        let alumno1: Alumno = new Alumno(arrayAlumno[0], arrayAlumno[1], Number(arrayAlumno[2]));
        registro.push(alumno1);
    }
    return registro;
}

//funcion que crea un nuevo alumno y lo devuelve
function completarAlumno(): Alumno {

    let nombre: string = readlineSync.question("insertar Nombre ");
    let apellido: string = readlineSync.question("insertar Apellido ");
    let DNI: number = readlineSync.questionInt("insertar DNI ");
    let alumno1: Alumno = new Alumno(nombre, apellido, DNI);
    return alumno1;
}


//recibo todo el registro de alumnos
function updateTXTFile(registroAlumnos: RegistroAlumnos): void {

    let txtFile: string = '';

    for (let i: number = 0; i < registroAlumnos.getAlumnosLength(); i++) {

        //obtengo uno a uno los objetos Auto del registro
        let alumno: Alumno = registroAlumnos.getAlumnos()[i];

        if (alumno.getNombre() == '') {

        }
        else {
            //los valores de cada alumno los voy almacenando en esta variable de tipo string
            txtFile = txtFile + alumno.getNombre() + ',' + alumno.getApellido() + ',' + alumno.getDNI().toString() + ';';
        }
    }

    //actualizo el txt
    fs.writeFile('alumnosList.txt', txtFile, function (err) {
        if (err) throw err;

    });
}


function imprimirRegistro(registro: RegistroAlumnos): void {

    for (let i: number = 0; i < registro.getAlumnosLength(); i++) {

        if (registro.getAlumnos()[i].getNombre() == '') { //este if evita imprimir el ultimo elemento que seria vacio
        } else {
            console.log(registro.getAlumnos()[i]); // imprimo el registro completo
        }
    }


}




let alumno: string = 'alumnosList.txt';
let txtFile: FileManager = new FileManager(alumno);
let alumnos: string[] = [];
alumnos = txtFile.getStringArray();


//creo el registro de alumnos, y la funcion completeRegisty va a generar el arreglo de elementos de tipo Alumnos para llenar ese registro
let registroAlumnos: RegistroAlumnos = new RegistroAlumnos(completarRegistro(alumnos));

let opcion: number = 0;

opcion = readlineSync.questionInt("Que accion desea realizar? presione 1 para buscar un alumno,2 para insertar un alumno en el registro,3 para borrar un alumno del registro,4 para consultar su promedio, 5 para consultar una nota, 6 para insertar una nota,7 para imprimir el registro, 0 para salir ");

while (opcion != 0) {

    //let alumno1: Alumno;
    if (opcion == 1) {
        let DNI: number = readlineSync.question("Ingrese DNI del alumno buscado ");
        registroAlumnos.searchAlumno(DNI); //envio el DNI del alumno buscado al registro para ver si coincide con el atributo DNI de alguno de los elementos del registro
    }
    else if (opcion == 2) {
        let alumno1: Alumno = completarAlumno()//creo un alumno nuevo
        //chequeo que el alumno no este registrado
        let check: number = registroAlumnos.searchAlumno(alumno1.getDNI());
        if (check == -1) {
            registroAlumnos.insertAlumno(alumno1)
        }
        updateTXTFile(registroAlumnos);//actualizo el txt
    }
    else if (opcion == 3) {
        let DNI: number = readlineSync.question("Ingrese DNI del alumno que desea borrar ");
        registroAlumnos.deleteAlumno(DNI); //busco un elemento del registro y lo elimino
        updateTXTFile(registroAlumnos);//actualizo el txt
    }
    else if (opcion == 4) {
        let posicion: number = readlineSync.questionInt("inserte en que posicion se encuentra el alumno del cual desea saber su promedio ");
        if (posicion < registroAlumnos.getAlumnosLength()) {
            registroAlumnos.getAlumnos()[posicion].getPromedio();
        }
    }
    else if (opcion == 5) {
        let posicion: number = readlineSync.questionInt("inserte en que posicion se encuentra el alumno del cual desea saber una de sus notas ");
        let posicionNota: number = readlineSync.questionInt("Inserte posicion de la nota en el arreglo de notas ");
        console.log("notas del alumno seleccionado " + registroAlumnos.getAlumnos()[posicion].getNota(posicionNota));
    }
    else if (opcion == 6) {
        let posicion: number = readlineSync.questionInt("inserte en que posicion se encuentra el alumno del cual desea insertarle una nota ");
        let notaNueva: number = readlineSync.questionInt("Inserte la nota ");
        registroAlumnos.getAlumnos()[posicion].setNota[Number(notaNueva)];
    }
    else if (opcion == 7) {

        imprimirRegistro(registroAlumnos) //imprimo el registro

    }

    opcion = readlineSync.questionInt("Que accion desea realizar? presione 1 para buscar un alumno,2 para insertar un alumno en el registro,3 para borrar un alumno del registro,4 para consultar su promedio, 5 para consultar una nota, 6 para insertar una nota,7 para imprimir el registro, 0 para salir ");
}



