
export class Televisor {
    protected canalActual: number;
    protected volumenActual: number;
    protected estaPrendido: boolean;

    public constructor() {
        this.canalActual = 0;
        this.volumenActual = 10;
        this.estaPrendido = false;
    }

    public cambiarCanal(canal: number): void {
        this.canalActual = canal;
    }

    public cambiarVolumen(volumen: number): void {
        this.volumenActual = volumen;
    }

    public prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    }

    public getVolumen(): number {
        return this.volumenActual;
    }

    public getCanal(): number {
        return this.canalActual;
    }

}