import { Motor } from './motor'
import { RobotStandard } from './robotStandard'


export class RobotDePileta extends RobotStandard {

  

    public constructor(marcaRobot: string, modeloRobot: number, motorRobot: Motor) {
        super(marcaRobot, modeloRobot, motorRobot);
    }

    public limpiar(): void {
        
        if (this.estaPrendido == true) {
  
            console.log("limpiando la pileta ");
        }
        else if (this.estaPrendido == false) {

            console.log("debe prender el robot para poder ejecutar la accion ");
        }

    }

    public purificarAgua(): void {
 
        if (this.estaPrendido == true) {
        console.log("purificando el agua ");
        }
        else{
            console.log("debe prender el robot para poder realizar la tarea ");
        }
    }
}