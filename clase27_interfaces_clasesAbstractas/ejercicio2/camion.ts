

import { Vehiculo } from './vehiculo'


export class Camion extends Vehiculo {


    private tara: number;
    private largo: number;
    private cerealero: boolean;

    public constructor(brand: string, registry: string, year: number) {
        super(brand, registry, year);
        this.tara = 100;
        this.largo = 3;
        this.cerealero = false;
    }


    public acelerar(): void {
        this.velocidadActual += 30;
    }


    public setCerealero(cerealeroParametro: boolean): void {
        this.cerealero = cerealeroParametro;
    }

    public getCerealero(): boolean {
        return this.cerealero;
    }

    public setTara(taraParametro: number): void {
        this.tara = taraParametro;
    }

    public getTara(): number {
        return this.tara;
    }


    public setLargo(largoParametro: number): void {
        this.largo = largoParametro;
    }

    public getLargo(): number {
        return this.largo;

    }

    public color():void{
        console.log("color verde");
    }
}