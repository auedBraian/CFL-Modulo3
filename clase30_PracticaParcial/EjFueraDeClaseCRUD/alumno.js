"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Alumno = void 0;
var persona_1 = require("./persona");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(nombre, apellido, dni) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this.notas = [];
        _this.DNI = dni;
        _this.notas = [1, 1, 1];
        return _this;
    }
    Alumno.prototype.getPromedio = function () {
        var suma = 0;
        var promedio = 0;
        for (var i = 0; i < this.notas.length; i++) {
            suma = suma + this.notas[i];
        }
        promedio = (suma / this.notas.length);
        console.log("su promedio es " + promedio);
        return this.promedio;
    };
    Alumno.prototype.setNota = function (nota) {
        this.notas.push(nota);
        this.notas.pop(); //elimino la ultima posicion del arreglo Notas para que no me cuente mal la 
        //cantidad de elementos al momento de calcular el promedio
    };
    Alumno.prototype.getNota = function (position) {
        return this.notas[position];
    };
    Alumno.prototype.setDNI = function (DNI) {
        this.DNI = DNI;
    };
    Alumno.prototype.getDNI = function () {
        return this.DNI;
    };
    Alumno.prototype.compare = function (alumno1, alumno2) {
        if (alumno1.getDNI() == alumno2.getDNI()) {
            return true;
        }
    };
    return Alumno;
}(persona_1.Persona));
exports.Alumno = Alumno;
