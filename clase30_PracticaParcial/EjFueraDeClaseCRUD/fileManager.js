"use strict";
exports.__esModule = true;
exports.FileManager = void 0;
var fs = require("fs");
/*Clase FileManager, tiene los metodos para recibir informacion de un txt y convertir esa informacion a objetos de tipo Auto*/
var FileManager = /** @class */ (function () {
    function FileManager(location) {
        var txtFile = fs.readFileSync(location, 'utf8');
        this.stringArray = txtFile.split(';');
    }
    FileManager.prototype.printStringArray = function () {
        console.log('StringArray content: ' + this.stringArray);
    };
    FileManager.prototype.getStringArray = function () {
        return this.stringArray;
    };
    return FileManager;
}());
exports.FileManager = FileManager;
