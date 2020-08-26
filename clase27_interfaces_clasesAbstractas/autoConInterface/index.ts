
import {AutoDeCarrera} from './autoDeportivo'


let autoDep:AutoDeCarrera = new AutoDeCarrera(0,'Ford','GHJ567');

autoDep.acelerar();
console.log('velocidad actual despues de una acelerada '+autoDep.getVelocidadActual());
console.log('ver patente del auto deportivo '+ autoDep.getRegistry());
