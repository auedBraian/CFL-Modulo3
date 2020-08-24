
import ProductoEnStock from "./productoEnStock";

export default class Stock {
    
    private nombre: string;
    private productos: ProductoEnStock[];

    public constructor(nombre: string) {
        this.nombre = nombre;
        this.productos = [];
    }

    public getCantidad(): number {
        
        let sumaProductos = 0;

        for (let i = 0; i < this.productos.length; i++)
            sumaProductos += this.productos[i].getCantidad();

        return sumaProductos;
    }

    public getPrecio(): number {
        let precio = 0;

        for (let i = 0; i < this.productos.length; i++)
            precio += this.productos[i].getPrecio();

        return precio;
    }

    public getProductos(): ProductoEnStock[] {
        return this.productos;
    }

    public agregar(nuevoProducto: ProductoEnStock): void {
        this.productos.push(nuevoProducto);
    }

    public estaVacia(): boolean {
        return this.productos.length == 0;
    }

    public eliminar(posicion: number): boolean {
        if (posicion < 0 || posicion >= this.productos.length)
            return false;

        // A partir de 'posicion', eliminar un elemento
        this.productos.splice(posicion, 1); 

        return true;
    }
}