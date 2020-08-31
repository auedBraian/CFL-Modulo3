import { Alumno } from './alumno'

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

    //funcion que recibe el DNI del alumno buscado y busca en el registro un elemento con ese mismo DNI. Si el elemento esta, devuelve la posicion del mismo. 

    public searchAlumno(dni: number): number {

        let position: number = -1;
        let a: boolean = false;
        let i: number = 0;
        while (i < this.alumnos.length && a == false) {

            if (this.getAlumnos()[i].getDNI() == dni) {

                a = true;
            }

            if (a) {
                position = i;
            }
            i++
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
    public deleteAlumno(DNI: number): void {

        let position: number = -1;

        position = this.searchAlumno(DNI);

        if (position == -1) {

        }
        else {

            this.alumnos.splice(position, 1);
        }

    }

    //funcion que recibe un elemento de tipo Auto y lo inserta en el registro
    public insertAlumno(alumno: Alumno): void {

        this.alumnos.push(alumno);
        console.log("Alumno registrado con exito");
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
