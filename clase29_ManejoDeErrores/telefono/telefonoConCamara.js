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
exports.TelefonoConCamara = void 0;
var telefono_1 = require("./telefono");
//clase TelefonoConCamara, hereda los atributos y metodos de la clase Telefono, y se agregan metodos propios de esta clase
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        return _super.call(this) || this;
    }
    TelefonoConCamara.prototype.sacarFoto = function (click) {
        var imagen;
        if (click == true) {
            console.log("taking photo");
            imagen = "Imagen.jpg";
            this.bateriaActual -= 20;
            return imagen;
        }
    };
    return TelefonoConCamara;
}(telefono_1.Telefono));
exports.TelefonoConCamara = TelefonoConCamara;
