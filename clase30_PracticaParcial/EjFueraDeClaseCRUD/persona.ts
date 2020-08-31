

export class Persona {

    protected nombre: string;
    protected apellido: string;
    

    public constructor(name: string, surname: string) {
        this.nombre = name;
        this.apellido = surname;
     
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(name: string): void {
        this.nombre = name;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(surname: string): void {
        this.apellido = surname;
    }

}