

import { Vehiculo } from './vehiculo'


export class AutoDeportivo extends Vehiculo {

    private combustible: boolean;
    private altaGama: boolean;
    private importado: boolean;

    public constructor(brand: string, registry: string, year: number) {
        super(brand, registry, year);
        this.importado = false;
        this.combustible = true;
        this.altaGama = true;

    }

    public acelerar(): void {
        this.velocidadActual += 56;
    }


   
    public setImportado(importadoParametro: boolean): void {
        this.importado = importadoParametro;
    }

    public getImportado(): boolean {
        return this.importado;
    }

    public setAltaGama(altaGamaParametro: boolean): void {
        this.altaGama = altaGamaParametro;
    }

    public getAltaGama(): boolean {
        return this.altaGama;
    }

    public color():void{
        console.log("color azul");
    }
}