import { Persona } from "./persona"
import { AccionesAlumno } from './accionesAlumno'

export class Alumno extends Persona implements AccionesAlumno {

    protected promedio: number;
    protected notas: number[] =[];
    protected DNI:number;

    public constructor(nombre: string, apellido: string,dni:number) {
        super(nombre, apellido);
        this.DNI=dni;
        this.notas = new Array();
    }


    public getPromedio(): number {

        let suma:number=0;
        let promedio:number=0;
        for (let i: number = 0; i < this.notas.length; i++) {

           suma= suma+ this.notas[i];
      
        }
        
        promedio = (suma/(this.notas.length));
        console.log("su promedio es " + promedio);
        return this.promedio;
    
    }

    public setNota(nota:number): void {
        this.notas.push(nota);
          
    console.log(this.notas);
    }


    public getNota(position: number): number {
        return this.notas[position];
    }

    

    public setDNI(DNI:number):void{

        this.DNI=DNI;

    }

    public getDNI():number{
        return this.DNI;
    }

    public compare(alumno1: Alumno, alumno2: Alumno): boolean {

        if (alumno1.getDNI() == alumno2.getDNI()) {
    
                return true;
    
            }
    
        }

}

