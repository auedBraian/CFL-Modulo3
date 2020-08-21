
export abstract class Vehiculo {

    protected velocidadActual: number;
    protected estaPrendido: boolean;
    protected marca: string;
    protected patente: string
    protected anio: number;


    public constructor(brand: string, registry: string, year: number) {
        this.velocidadActual = 0;
        this.estaPrendido = false;
        this.marca = brand;
        this.patente = registry;
        this.anio = year;

    }

    abstract acelerar(): void;
    abstract color():void;


    public setMarca(marcaParametro: string): void {
        this.marca = marcaParametro;

    }

    public setPatente(patenteParametro: string): void {
        this.patente = patenteParametro;
    }


    public getMarca(): string {
        return this.marca
    }

    public getPatente(): string {

        return this.patente;
    }

    public getAnio(): number {
        return this.anio;
    }

    public getEstaPrendido(): boolean {

        if (this.estaPrendido == true) {
            return true;
        }
        else {
            return false;
        }
    }

    public getVelocidadActual(): number {
        return this.velocidadActual;
    }





}