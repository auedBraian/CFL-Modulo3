
import * as fs from 'fs';

//la variable texto la convierte en lo que esta escrito en el txt
let texto: string = fs.readFileSync('abc.txt', 'utf8');

//crea un array de strings, toma el texto y lo divide por espacios
let palabras: string[] = texto.split(' ');

console.log(palabras);