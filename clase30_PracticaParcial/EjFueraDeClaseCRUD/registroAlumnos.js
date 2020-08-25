"use strict";
exports.__esModule = true;
exports.RegistroAlumnos = void 0;
//Clase RegistroAlumnos con sus variables y metodos
var RegistroAlumnos = /** @class */ (function () {
    function RegistroAlumnos(alumnos) {
        this.alumnos = [];
        if (alumnos == undefined || alumnos == null) {
            this.alumnos = [];
        }
        else {
            this.alumnos = alumnos;
        }
    }
    //funcion que recibe el DNI del alumno buscado y busca en el registro un elemento con ese mismo DNI. Si el elemento esta, devuelve la posicion del mismo. 
    RegistroAlumnos.prototype.searchAlumno = function (dni) {
        var position = -1;
        var a = false;
        var i = 0;
        while (i < this.alumnos.length && a == false) {
            if (this.getAlumnos()[i].getDNI() == dni) {
                a = true;
            }
            if (a) {
                position = i;
            }
            i++;
        }
        if (position == -1) {
            console.log("el alumno no esta registrado ");
        }
        else {
            console.log("el alumno esta registrado en la posicion " + position);
        }
        return position;
    };
    //funcion que recibe un elemento de tipo Alumno, lo busca en el registro y si esta lo elimina
    RegistroAlumnos.prototype.deleteAlumno = function (DNI) {
        var position = -1;
        position = this.searchAlumno(DNI);
        if (position == -1) {
        }
        else {
            this.alumnos.splice(position, 1);
        }
    };
    //funcion que recibe un elemento de tipo Auto y lo inserta en el registro
    RegistroAlumnos.prototype.insertAlumno = function (alumno) {
        this.alumnos.push(alumno);
        console.log("Alumno registrado con exito");
    };
    //devuelve la cantidad de alumnos que hay en el registro
    RegistroAlumnos.prototype.getAlumnosLength = function () {
        return this.alumnos.length;
    };
    //devuelve todo el registro de alumnos
    RegistroAlumnos.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    return RegistroAlumnos;
}());
exports.RegistroAlumnos = RegistroAlumnos;
