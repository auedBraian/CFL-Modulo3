import {Alumno} from './alumno'

//Clase RegistroAlumnos con sus variables y metodos
export class RegistroAlumnos {

    private alumnos: Alumno[] = [];

    constructor(alumnos?: Alumno[]) {

        if (alumnos == undefined || alumnos == null) {

            this.alumnos = [];
        }
        else {
            this.alumnos = alumnos;
        }
    }

    //funcion que recibe un elemento de tipo Alumno y busca en el registro si el elemento esta. Si esta devuelve la posicion del mismo. Para buscarlo utiliza la funcion compare de la clase Auto
    public searchAlumno(alumno: Alumno): number {

        let position: number = -1;
      
        for (let i: number = 0; i < this.alumnos.length; i++) {

            let a: boolean = alumno.compare(this.alumnos[i], alumno);
            if (a) {
            position = i;
            }
        }

        if (position == -1) {

            console.log("el alumno no esta registrado ");
        }
        else {
            console.log("el alumno esta registrado en la posicion " + position);
        }
        return position;
    }


    
    
    //funcion que recibe un elemento de tipo Alumno, lo busca en el registro y si esta lo elimina
    public deleteAlumno(alumno: Alumno): void {

        let position: number = -1;

        position = this.searchAlumno(alumno);

        if (position == -1) {

        }
        else {
            
            this.alumnos.splice(position,1);
        }

    }

    //funcion que recibe un elemento de tipo Auto y lo inserta en el registro
    public insertAlumno(alumno: Alumno): void {

        this.alumnos.push(alumno);
    }

    //devuelve la cantidad de alumnos que hay en el registro
    public getAlumnosLength(): number {
        return this.alumnos.length;
    }

    //devuelve todo el registro de alumnos
    public getAlumnos(): Alumno[] {

        return this.alumnos;
    }
}
