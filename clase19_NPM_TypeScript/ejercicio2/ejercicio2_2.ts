

function sumar(array:number []): number {

    let suma:number = 0;
    
    for(let i:number= 0; i<array.length;i++){

        suma=suma+array[i];
    }

    return suma;
}



let num: number[] = new Array(5);

num[0] = 20; 
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;

console.log("la suma es "+sumar(num));