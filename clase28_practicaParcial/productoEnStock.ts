
import Producto from "./producto";

export default class ProductoEnStock implements Producto {
    private cantidad: number;
    private nombre: string;
    private precio: number;
    private descripcion: string;
    
    public constructor(cant: number, nombre: string, precio?: number, descripcion?: string) {
        this.cantidad= cant;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getCantidad(): number {
        return this.cantidad
    }

    public getNombre():string{
        return this.nombre;
    }

    public getDescripcion():string{
        return this.descripcion;
    }

}