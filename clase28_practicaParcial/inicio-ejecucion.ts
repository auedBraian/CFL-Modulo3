
import Stock from "./stock";
import ProductoEnStock from "./productoEnStock";
import * as fs from 'fs';
var readlineSync = require('readline-sync');


function completarStock(stockProductos: string[]): Stock {

    let stockInicial: Stock = new Stock('Stock Inicial');

    for (let i: number = 0; i < stockProductos.length; i++) {
        let prod: string = stockProductos[i];
        let producto = new ProductoEnStock((Number(prod[0])), prod[1], (Number(prod[2])), prod[3]);

        stockInicial.agregar(producto);
    }
    return stockInicial;
}


//recibo el arreglo de productos vendidos
function updateTXTFile(registroVendidos: Stock): void {

    let txtFile: string = '';
    
    
    for (let i: number = 0; i < registroVendidos.getProductos().length; i++) {

        //obtengo uno a uno los objetos del registro de vendidos
        let prod: ProductoEnStock = registroVendidos.getProductos()[i];

        //los valores de cada prod los voy almacenando en esta variable de tipo string
        txtFile = txtFile + prod.getCantidad().toString()+ ',' + prod.getNombre() + ',' + prod.getPrecio().toString() + ',' + prod.getDescripcion()+';';
    }
   
    //actualizo el txt
    fs.appendFile('vendidosList.txt', txtFile, function (err) {
        if (err) throw err;
        
    });
}

//inicia programa
let option: number = readlineSync.questionInt("Ingrese 1 para cargar los productos desde un archivo txt, 2 para cargarlos secuencialmente");

let newStock: Stock = new Stock('Primer Stock');


let prod1: ProductoEnStock = new ProductoEnStock(20, 'carameloSugus', 1, 'caramelo masticable');
let prod2: ProductoEnStock = new ProductoEnStock(14, "Chocolate milka", 60, 'chocolate');
let prod3: ProductoEnStock = new ProductoEnStock(67, 'alfajor bon o bon', 89, 'el mejor alfajor');
let prod4: ProductoEnStock = new ProductoEnStock(15, 'chupetines', 20, 'los redonditos');
let prod5: ProductoEnStock = new ProductoEnStock(25, 'pico dulce', 12, 'los flaquitos');
let prod6: ProductoEnStock = new ProductoEnStock(5, 'gomitas', 45, 'redonditas');
let prod7: ProductoEnStock = new ProductoEnStock(27, 'caramelos alka', 5, "los chiquitos");
let prod8: ProductoEnStock = new ProductoEnStock(100, 'tita', 34, "la que no es rodesia");
let prod9: ProductoEnStock = new ProductoEnStock(50, 'figuritas', 67, 'dragon ball z');
let prod10: ProductoEnStock = new ProductoEnStock(89, 'autitos', 284, "chocadores");



if (option == 1) {

    let listadoProd: string = fs.readFileSync('productoEnStock.txt', 'utf8');
    //arreglo de strings de productos
    let productos: string[] = [];
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
let stockGolosinas = new Stock("Golosinas mas baratas");
stockGolosinas.agregar(prod1);
stockGolosinas.agregar(prod2);
stockGolosinas.agregar(prod3);
stockGolosinas.agregar(prod4);
stockGolosinas.agregar(prod9);
stockGolosinas.agregar(prod10);

//otra seleccion de stock
let stockGolosinas2 = new Stock("Golosinas mas caras");
stockGolosinas2.agregar(prod3);
stockGolosinas2.agregar(prod4);
stockGolosinas2.agregar(prod7);
stockGolosinas2.agregar(prod10);

//otra seleccion de stock
let stockGolosinas3 = new Stock("Lo mas rico");
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

let arrVendidos:Stock = new Stock('vendidos');

let cargarVendidos:number = readlineSync.questionInt("ingrese 1 para cargar productos vendidos, cualquier otro valor para salir ");

while(cargarVendidos==1){
   
    let nombreVendido:string=readlineSync.question("ingrese nombre del producto vendido ");    
    let cantVendido:number=readlineSync.questionInt("ingrese cantidad de unidades del producto que vendio ");
    let precioVenta:number=readlineSync.questionInt("Ingrese precio al que vendio ");
   
    let descripcion:string=readlineSync.question("Ingrese una descripcion ");
   
    let prodVendido:ProductoEnStock= new ProductoEnStock(cantVendido,nombreVendido,precioVenta,descripcion);

    arrVendidos.agregar(prodVendido);
    cargarVendidos= readlineSync.questionInt("ingrese 1 para cargar productos vendidos, cualquier otro valor para salir ");

}

console.log("imprimiendo vendidos y exportando a txt ");
console.log(arrVendidos);

updateTXTFile(arrVendidos);


