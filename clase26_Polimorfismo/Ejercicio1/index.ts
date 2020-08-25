
import {Auto} from './auto'
import {AutoDeportivo} from './autoDeportivo'


let autoComun:Auto = new Auto('Ford',2018,'ABC 234');

autoComun.acelerar();

console.log('velocidad actual del auto ' + autoComun.getSpeed());

autoComun.acelerar();
console.log("marca del auto comun "+ autoComun.getBrand());
console.log("modelo del auto comun "+autoComun.getModel());
console.log("patente del auto comun "+autoComun.getRegistry());
autoComun.mejorarModelo();
console.log("modelo mejorado del auto comun = "+ autoComun.getModel())
console.log('velocidad actual del auto comun ' + autoComun.getSpeed());


let autoDeCarrera:AutoDeportivo = new AutoDeportivo('Chevroley',2020,'DEF 789');


autoDeCarrera.acelerar();

console.log('velocidad actual del auto de carrera' + autoDeCarrera.getSpeed());

autoDeCarrera.acelerar();
console.log("marca del auto de carrera "+autoDeCarrera.getBrand());
console.log("modelo del auto de carrera "+autoDeCarrera.getModel());
console.log("patente del auto de carrera "+autoDeCarrera.getRegistry());
autoDeCarrera.mejorarModelo();
console.log("modelo mejorado del auto comun = "+ autoDeCarrera.getModel())
console.log("velocidad actual del auto de carrera " + autoDeCarrera.getSpeed());
