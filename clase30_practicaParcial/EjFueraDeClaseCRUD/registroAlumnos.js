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
    //funcion que recibe un elemento de tipo Alumno y busca en el registro si el elemento esta. Si esta devuelve la posicion del mismo. Para buscarlo utiliza la funcion compare de la clase Auto
    RegistroAlumnos.prototype.searchAlumno = function (alumno) {
        var position = -1;
        for (var i = 0; i < this.alumnos.length; i++) {
            var a = alumno.compare(this.alumnos[i], alumno);
            if (a) {
                position = i;
            }
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
    RegistroAlumnos.prototype.deleteAlumno = function (alumno) {
        var position = -1;
        position = this.searchAlumno(alumno);
        if (position == -1) {
        }
        else {
            this.alumnos.splice(position, 1);
        }
    };
    //funcion que recibe un elemento de tipo Auto y lo inserta en el registro
    RegistroAlumnos.prototype.insertAlumno = function (alumno) {
        this.alumnos.push(alumno);
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
