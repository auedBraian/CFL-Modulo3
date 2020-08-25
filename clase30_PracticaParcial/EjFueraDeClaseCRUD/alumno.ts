import { Persona } from "./persona"
import { AccionesAlumno } from './accionesAlumno'

export class Alumno extends Persona implements AccionesAlumno {

    protected promedio: number;
    protected notas: number[]=[];
    protected DNI:number;

    public constructor(nombre: string, apellido: string,dni:number) {
        super(nombre, apellido);
        this.DNI=dni;
        this.notas = [0,0,0];
        

    }


    public getPromedio(): number {

        for (let i: number = 0; i < this.notas.length; i++) {

            this.promedio = this.promedio + this.notas[i];
        }
        
        return (this.promedio/this.notas.length);
    }

    public setNota(nota:number): void {
        this.notas.push(nota);
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

