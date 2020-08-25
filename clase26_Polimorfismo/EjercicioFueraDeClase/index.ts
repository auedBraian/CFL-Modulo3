
var readlineSync = require('readline-sync');

import { RobotDePileta } from './robotDePileta'
import { RobotDeCasa } from './robotDeCasa'
import { Motor } from './motor';

function createMotor():Motor{

    let potenciaMotor:number = readlineSync.questionInt("Ingrese caballos de potencia del motor ");
    let combustibleMotor:string=readlineSync.question("Ingrese tipo de combustible del motor ");
    let cantValvMotor:number=readlineSync.questionInt("ingrese cantidad de valvulas del motor ");
    let motor:Motor = new Motor(potenciaMotor,combustibleMotor,cantValvMotor);
    return motor;

}

function createHomeRobot():RobotDeCasa{

    let marcaRobot:string = readlineSync.question("ingrese marca del robot ");
    let modeloRobot:number= readlineSync.questionInt("Ingrese modelo ");
    let motor:Motor = createMotor();
    let robot:RobotDeCasa=new RobotDeCasa(marcaRobot,modeloRobot,motor);

    return robot;
}


function createPoolRobot():RobotDePileta{

    let marcaRobot:string = readlineSync.question("ingrese marca del robot ");
    let modeloRobot:number= readlineSync.questionInt("Ingrese modelo ");
    let motor:Motor = createMotor();
    let robot:RobotDePileta=new RobotDePileta(marcaRobot,modeloRobot,motor);

    return robot;
}




let option: number = readlineSync.questionInt("Presione 1 para crear un robot para su casa, 2 para crear un robot de pileta, o cualquier otro valor para salir ");

if (option == 1) {

    let homeRobot: RobotDeCasa = createHomeRobot(); //RobotDeCasa hereda de RobotStandard

    let robotOptions: number = readlineSync.questionInt("Que accion desea que ejecute su Robot? Presione 1 para prenderlo, 2 para indicarle que comienze a limpiar la casa, 3 para indicarle que comienze a aspirar la alfombra, 4 para apagarlo, otro valor para salir ");

    while (robotOptions <= 4 && robotOptions > 0) {

        switch (robotOptions) {

            case 1: homeRobot.prenderRobot();
                break;
            case 2: homeRobot.limpiar(); //aca aplico polimorfismo
                break;
            case 3: homeRobot.aspirarAlfombra();
                break;
            case 4: homeRobot.apagarRobot();
                break;
        }

        robotOptions = readlineSync.questionInt("Que accion desea que ejecute su Robot? Presione 1 para prenderlo, 2 para indicarle que comienze a limpiar la casa, 3 para indicarle que comienze a aspirar la alfombra, 4 para apagarlo, otro valor para salir ");

    }

} else if (option == 2) {


    let poolRobot: RobotDePileta = createPoolRobot();//RobotDePileta hereda de RobotStandard

    let robotOptions: number = readlineSync.questionInt("Que accion desea que ejecute su Robot? Presione 1 para prenderlo, 2 para indicarle que comienze a limpiar la pileta,3 para purificar el agua, 4 para apagarlo, otro valor para salir");

    while (robotOptions <= 4 && robotOptions > 0) {

        switch (robotOptions) {

            case 1: poolRobot.prenderRobot();
                break;
            case 2:
                poolRobot.limpiar(); //aca aplico polimorfismo
                break;
            case 3:
                poolRobot.purificarAgua();
                break;
            case 4: poolRobot.apagarRobot();
            break;
        }

        robotOptions = readlineSync.questionInt("Que accion desea que ejecute su Robot? Presione 1 para prenderlo, 2 para indicarle que comienze a limpiar la pileta,3 para purificar el agua, 4 para apagarlo, otro valor para salir");
    }
} else if (option != 1 && option != 2) {

    console.log("Thanks for your visit");
}