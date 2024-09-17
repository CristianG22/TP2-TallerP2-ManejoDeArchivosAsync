import { info } from 'console';
import fs from 'fs';

function leerArchivoPromise(ruta) {
    return new Promise((resolve, reject) => {
        fs.readFile(ruta, 'utf-8', (error, datos) => {
            if(error){
                reject (new Error(`Error en lectura: ${error.message}`))
            }
            else resolve (datos);
        })
    })
}

function escribirEnArchivoPromise(ruta, info){
    return new Promise ((resolve,reject) => {
        fs.writeFile(ruta, info, (error) => {
            if(error){
                reject( new Error(`Error en lectura: ${error.message}`))
            }
            else resolve()
        })
    })
}

function realizarSolucion (ruta){
    leerArchivoPromise(ruta)
    .then((contenidoStr) => {
        let info = {
            contenidoStr: contenidoStr,
            contenidoObj: JSON.parse(contenidoStr),
            size: Buffer.byteLength(contenidoStr, 'utf-8')
        }

        console.log(info);

        escribirEnArchivoPromise('./info.txt', JSON.stringify(info, null, '\t'));
    })
    .catch((error) => {
        console.log(`Error: ${error.message}`)
    })
}

    export default{
        realizarSolucion
    }

