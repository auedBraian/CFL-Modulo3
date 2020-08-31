"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(name, surname) {
        this.nombre = name;
        this.apellido = surname;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (name) {
        this.nombre = name;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (surname) {
        this.apellido = surname;
    };
    return Persona;
}());
exports.Persona = Persona;
