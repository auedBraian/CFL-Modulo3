import { RobotStandard } from './robotStandard'
import {Motor} from './motor'

export class RobotDeCasa extends RobotStandard {

    public constructor(marcaRobot:string,modeloRobot:number,motorRobot:Motor){
        super(marcaRobot,modeloRobot,motorRobot);
    }

    public limpiar(): void {

        if (this.estaPrendido == true) {
            console.log("comenzando a limpiar la casa");
        }
        else {
            
            console.log("debe prender el robot para indicarle una tarea");
        }
    }

    public aspirarAlfombra(): void {

        if (this.estaPrendido == true) {
            console.log("comenzando a aspirar alfombra");
        }
        else {
            console.log("debe prender el robot para indicarle una tarea");
    }
}


}