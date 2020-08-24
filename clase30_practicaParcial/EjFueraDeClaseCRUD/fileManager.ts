import * as fs from 'fs';

/*Clase FileManager, tiene los metodos para recibir informacion de un txt y convertir esa informacion a objetos de tipo Auto*/
export class FileManager {
    
    private stringArray: string[];
    
    constructor(location: string) { 
        let txtFile: string = fs.readFileSync(location, 'utf8');
        this.stringArray = txtFile.split(';');
    } 

    public printStringArray():void{
        console.log('StringArray content: '+ this.stringArray);
    }

    public getStringArray():string[]{
        return this.stringArray;
    }
}
