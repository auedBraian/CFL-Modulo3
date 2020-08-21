

export class Vehiculo {

    private brand: string;
    private model: string;
    private year: number;
    

    public constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
     
    }

    public getBrand(): string {
        return this.brand;
    }

    public setBrand(brand: string): void {
        this.brand = brand;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }


    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }


}