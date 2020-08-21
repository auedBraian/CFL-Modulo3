import { Vehiculo } from "./vehiculo";
import {AccionesAuto} from './interfaceAuto'

export  class Auto extends Vehiculo implements AccionesAuto {

    private color: string;
    private carRegistration:string;

    public constructor(brand: string, model: string, year: number, color: string, patente:string) {
        super(brand,model,year);
        this.color = color;
        this.carRegistration=patente;

    }

   
    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getCarRegistration(): string {
        return this.carRegistration;
    }

    public setCarRegistration(registration: string): void {
        this.carRegistration = registration;
    }

//funcion que recibe 2 elementos del tipo Auto y compara si son iguales. Si son iguales devuelve true
    public compare(auto1: Auto, auto2: Auto): boolean {

    if (auto1.getBrand() == auto2.getBrand() && auto1.getModel() == auto2.getModel() && auto1.getYear() == auto2.getYear() && auto1.getColor() == auto2.getColor() && auto1.getCarRegistration() == auto2.getCarRegistration()) {

            return true;

        }

    }

}