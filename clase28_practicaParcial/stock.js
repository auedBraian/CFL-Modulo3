"use strict";
exports.__esModule = true;
var Stock = /** @class */ (function () {
    function Stock(nombre) {
        this.nombre = nombre;
        this.productos = [];
    }
    Stock.prototype.getCantidad = function () {
        var sumaProductos = 0;
        for (var i = 0; i < this.productos.length; i++)
            sumaProductos += this.productos[i].getCantidad();
        return sumaProductos;
    };
    Stock.prototype.getPrecio = function () {
        var precio = 0;
        for (var i = 0; i < this.productos.length; i++)
            precio += this.productos[i].getPrecio();
        return precio;
    };
    Stock.prototype.getProductos = function () {
        return this.productos;
    };
    Stock.prototype.agregar = function (nuevoProducto) {
        this.productos.push(nuevoProducto);
    };
    Stock.prototype.estaVacia = function () {
        return this.productos.length == 0;
    };
    Stock.prototype.eliminar = function (posicion) {
        if (posicion < 0 || posicion >= this.productos.length)
            return false;
        // A partir de 'posicion', eliminar un elemento
        this.productos.splice(posicion, 1);
        return true;
    };
    return Stock;
}());
exports["default"] = Stock;
