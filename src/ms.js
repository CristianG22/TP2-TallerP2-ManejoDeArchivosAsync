import fs from 'fs';

function leerArchivo(ruta) {
    try{
        return fs.readFileSync(ruta, 'utf-8')
    }
    catch(error){
        console.log(`Error en lectura: ${error.message}`);
    }

}

function escribirEnArchivo(ruta, info){
    try{
        fs.writeFileSync(ruta, info)
    }
    catch(error){
        console.log(`Error en lectura: ${error.message}`)
    }
}

function realizarSolucion(ruta){

    //Leo el archivo package.json 
    let contenidoStr = leerArchivo(ruta)

    //Declaro el objeto info
    let info = {
        contenidoStr: contenidoStr,
        contenidoObj: JSON.parse(contenidoStr),
        size: Buffer.byteLength(contenidoStr, 'utf-8')
    }

    //Muestro por consola el objeto info
    console.log(info);

    //Guardo el objeto en un archivo info.txt
    escribirEnArchivo('./info.txt', JSON.stringify(info, null, '\t'));

}

export default {
    realizarSolucion
}