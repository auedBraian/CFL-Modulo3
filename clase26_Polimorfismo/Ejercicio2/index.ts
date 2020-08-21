import { RobotDeCasa } from "./robotDeCasa";
import { RobotDePileta } from "./robotDePileta";

let robotHogar:RobotDeCasa = new RobotDeCasa('Sony',220,2020,true);

console.log(robotHogar.getMarca());
console.log(robotHogar.getModelo());
console.log(robotHogar.getPotencia());
console.log("aumentando potencia...");
robotHogar.aumentarPotencia();

console.log('nueva potencia '+ robotHogar.getPotencia());
robotHogar.limpiar(true);


let robotPileta:RobotDePileta = new RobotDePileta('Piletero',110,2018,false);

console.log(robotPileta.getMarca());
console.log(robotPileta.getModelo());
console.log(robotPileta.getPotencia());
console.log("aumentando potencia...");
robotPileta.aumentarPotencia();

console.log('nueva potencia '+ robotPileta.getPotencia());
robotPileta.limpiar(true);