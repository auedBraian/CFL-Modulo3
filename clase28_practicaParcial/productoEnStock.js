"use strict";
exports.__esModule = true;
var ProductoEnStock = /** @class */ (function () {
    function ProductoEnStock(cant, nombre, precio, descripcion) {
        this.cantidad = cant;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
    ProductoEnStock.prototype.getPrecio = function () {
        return this.precio;
    };
    ProductoEnStock.prototype.getCantidad = function () {
        return this.cantidad;
    };
    ProductoEnStock.prototype.getNombre = function () {
        return this.nombre;
    };
    ProductoEnStock.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    return ProductoEnStock;
}());
exports["default"] = ProductoEnStock;
