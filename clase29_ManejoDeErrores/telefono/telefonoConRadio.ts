import {Telefono} from './telefono'

//clase TelefonoConRadio, hereda los atributos y metodos de la clase Telefono, y se agregan metodos propios de esta clase

export class TelefonoConRadio extends Telefono {

    protected frecuenciaActual: number;

    constructor() {
        super();
        this.frecuenciaActual = 103.5;
    }

    public verFrecuenciaActual(): number {

        return this.frecuenciaActual
    }

    public cambiarFrecuenciaRadial(frecuencia: number): void {
        this.frecuenciaActual = frecuencia;
    }

}