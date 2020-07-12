import * as ReadlineSync from './node_modules/readline-sync';

function ejecutar(seleccion: number): void {

    switch (seleccion) {

        case 1:
            insertar();
            break;
        case 2:
            eliminar();
            break;
        case 3:
            buscar();
            break;
        case 4:
            actualizar();
            break;
        case 5:
            imprimir();
            break; 
        }
}


function insertar(): void {

    let nuevaPalabra: string;
    nuevaPalabra = ReadlineSync.question('Ingrese nueva palabra ');
    palabras.push(nuevaPalabra);

}


function eliminar(): void {

    let posicion: number;
    posicion = ReadlineSync.questionInt('Ingrese la posicion del arreglo que quiere eliminar ');
    delete palabras[posicion];

}

function buscar(): void {

    let palabraBuscada: string;
    palabraBuscada = ReadlineSync.question('Ingrese la palabra a buscar ');
    
    for (let i: number = 0; i <= palabras.length; i++) {

        if (palabras[i] == palabraBuscada) {
            console.log("la palabra buscada esta en la posicion " + i);
        }
    }

}

function actualizar(): void {

    let palabraDeseada: string;
    let posicionDeseada: number;
    palabraDeseada = ReadlineSync.question('Ingrese palabra que desea actualizar ');
    posicionDeseada = ReadlineSync.questionInt('Ingrese posicion donde desea insertar la palabra nueva ');

    palabras[posicionDeseada] = palabraDeseada;

}

function imprimir(): void {

    for (let i: number = 0; i < palabras.length; i++) {

        console.log('palabra almacenada en posicion '+i+' = '+palabras[i]);
    }
}


let palabras: string[] = new Array(5); 

/*
= ['perro','gato','ave','tigre'];
*/

for (let i: number = 0; i < palabras.length; i++) {

    palabras[i] = ReadlineSync.question('Ingrese palabra Aleatoria ');

}


let opcion: number = 0;

opcion = ReadlineSync.questionInt("Ingrese 1 para insertar una palabra, 2 para eliminar, 3 para buscar y 4 para actualizar,5 para imprimir el arreglo y 0 para salir ");


while (opcion != 0) {

    ejecutar(opcion);

    opcion = ReadlineSync.questionInt("Ingrese 1 para insertar una palabra, 2 para eliminar, 3 para buscar y 4 para actualizar,5 para imprimir el arreglo y 0 para salir ");

}

/*terminar el ejercicio. La idea es hacer un while, que el usuario elija una opcion que sea 1,2,3,4 (insertar, elminar, lo que sea) o que aprete 0 para terminar. Cuando elije la opcion, se ejecuta la funcion correspondiente a la accion que desee realizar el usuario. es complejo pero esta bueno
*/
