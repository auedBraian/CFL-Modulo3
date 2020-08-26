"use strict";
exports.__esModule = true;
var stock_1 = require("./stock");
var productoEnStock_1 = require("./productoEnStock");
var fs = require("fs");
var readlineSync = require('readline-sync');
function completarStock(stockProductos) {
    var stockInicial = new stock_1["default"]('Stock Inicial');
    for (var i = 0; i < stockProductos.length; i++) {
        var prod = stockProductos[i];
        var producto = new productoEnStock_1["default"]((Number(prod[0])), prod[1], (Number(prod[2])), prod[3]);
        stockInicial.agregar(producto);
    }
    return stockInicial;
}
//recibo el arreglo de productos vendidos
function updateTXTFile(registroVendidos) {
    var txtFile = '';
    for (var i = 0; i < registroVendidos.getProductos().length; i++) {
        //obtengo uno a uno los objetos del registro de vendidos
        var prod = registroVendidos.getProductos()[i];
        //los valores de cada prod los voy almacenando en esta variable de tipo string
        txtFile = txtFile + prod.getCantidad().toString() + ',' + prod.getNombre() + ',' + prod.getPrecio().toString() + ',' + prod.getDescripcion() + ';';
    }
    //actualizo el txt
    fs.appendFile('vendidosList.txt', txtFile, function (err) {
        if (err)
            throw err;
    });
}
//inicia programa
var option = readlineSync.questionInt("Ingrese 1 para cargar los productos desde un archivo txt, 2 para cargarlos secuencialmente");
var newStock = new stock_1["default"]('Primer Stock');
var prod1 = new productoEnStock_1["default"](20, 'carameloSugus', 1, 'caramelo masticable');
var prod2 = new productoEnStock_1["default"](14, "Chocolate milka", 60, 'chocolate');
var prod3 = new productoEnStock_1["default"](67, 'alfajor bon o bon', 89, 'el mejor alfajor');
var prod4 = new productoEnStock_1["default"](15, 'chupetines', 20, 'los redonditos');
var prod5 = new productoEnStock_1["default"](25, 'pico dulce', 12, 'los flaquitos');
var prod6 = new productoEnStock_1["default"](5, 'gomitas', 45, 'redonditas');
var prod7 = new productoEnStock_1["default"](27, 'caramelos alka', 5, "los chiquitos");
var prod8 = new productoEnStock_1["default"](100, 'tita', 34, "la que no es rodesia");
var prod9 = new productoEnStock_1["default"](50, 'figuritas', 67, 'dragon ball z');
var prod10 = new productoEnStock_1["default"](89, 'autitos', 284, "chocadores");
if (option == 1) {
    var listadoProd = fs.readFileSync('productoEnStock.txt', 'utf8');
    //arreglo de strings de productos
    var productos = [];
    productos = listadoProd.split(';');
    newStock = completarStock(productos);
}
else if (option == 2) {
    newStock.agregar(prod1);
    newStock.agregar(prod2);
    newStock.agregar(prod3);
    newStock.agregar(prod4);
    newStock.agregar(prod5);
    newStock.agregar(prod6);
    newStock.agregar(prod7);
    newStock.agregar(prod8);
    newStock.agregar(prod9);
    newStock.agregar(prod10);
}
//otra seleccion de stock
var stockGolosinas = new stock_1["default"]("Golosinas mas baratas");
stockGolosinas.agregar(prod1);
stockGolosinas.agregar(prod2);
stockGolosinas.agregar(prod3);
stockGolosinas.agregar(prod4);
stockGolosinas.agregar(prod9);
stockGolosinas.agregar(prod10);
//otra seleccion de stock
var stockGolosinas2 = new stock_1["default"]("Golosinas mas caras");
stockGolosinas2.agregar(prod3);
stockGolosinas2.agregar(prod4);
stockGolosinas2.agregar(prod7);
stockGolosinas2.agregar(prod10);
//otra seleccion de stock
var stockGolosinas3 = new stock_1["default"]("Lo mas rico");
stockGolosinas3.agregar(prod5);
stockGolosinas3.agregar(prod6);
stockGolosinas3.agregar(prod7);
//Imprime los diferentes stock
console.log(stockGolosinas);
console.log(stockGolosinas2);
console.log(stockGolosinas3);
console.log('cantidad de unidades en stock ' + stockGolosinas.getCantidad());
console.log('valor total del stock ' + stockGolosinas.getPrecio());
console.log('hay stock? ' + stockGolosinas.estaVacia());
console.log('cuanto hay en el stock 2? ' + stockGolosinas2.getCantidad());
var arrVendidos = new stock_1["default"]('vendidos');
var cargarVendidos = readlineSync.questionInt("ingrese 1 para cargar productos vendidos, cualquier otro valor para salir ");
while (cargarVendidos == 1) {
    var nombreVendido = readlineSync.question("ingrese nombre del producto vendido ");
    var cantVendido = readlineSync.questionInt("ingrese cantidad de unidades del producto que vendio ");
    var precioVenta = readlineSync.questionInt("Ingrese precio al que vendio ");
    var descripcion = readlineSync.question("Ingrese una descripcion ");
    var prodVendido = new productoEnStock_1["default"](cantVendido, nombreVendido, precioVenta, descripcion);
    arrVendidos.agregar(prodVendido);
    cargarVendidos = readlineSync.questionInt("ingrese 1 para cargar productos vendidos, cualquier otro valor para salir ");
}
console.log("imprimiendo vendidos y exportando a txt ");
console.log(arrVendidos);
updateTXTFile(arrVendidos);
