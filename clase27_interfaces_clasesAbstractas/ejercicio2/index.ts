

import {AutoCiudad} from './autoCiudad'
import {Camion} from './camion'
import {AutoDeportivo} from './autoDeportivo'


let autoDeCiudad:AutoCiudad = new AutoCiudad('Ford','AAA123',2020);
console.log("Datos del auto de ciudad ");
autoDeCiudad.acelerar();
console.log(autoDeCiudad.getVelocidadActual());
console.log(autoDeCiudad.getPatente());
console.log(autoDeCiudad.getAnio());
console.log(autoDeCiudad.getMarca());
autoDeCiudad.color();

let camion:Camion = new Camion('Chevrolet','BBB456',2019);
console.log("Datos del Camion ");
camion.acelerar();
console.log(camion.getVelocidadActual());
console.log(camion.getPatente());
console.log(camion.getAnio());
console.log(camion.getMarca());
camion.color();

let autoDeCarrera:AutoDeportivo = new AutoDeportivo('Mustang','CCC678',2018);
console.log("Datos del Auto de carrera ");
autoDeCarrera.acelerar();
console.log(autoDeCarrera.getVelocidadActual());
console.log(autoDeCarrera.getPatente());
console.log(autoDeCarrera.getAnio());
console.log(autoDeCarrera.getMarca());
autoDeCarrera.color();
