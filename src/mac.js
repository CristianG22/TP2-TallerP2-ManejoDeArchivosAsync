import fs from 'fs';

function realizarSolucion(ruta) {

    fs.readFile(ruta, 'utf-8', (error,datos) => {
        if(error) throw Error(`Error en lectura: ${error.message}`);

        //Declaro el objeto info
        let info = {
            contenidoStr: datos,
            contenidoObj: JSON.parse(datos),
            size: Buffer.byteLength(datos, 'utf-8')
        }

        //Muestro por consola el objeto info
        console.log(info);

        //Guardo el objeto en un archivo info.txt
        fs.writeFile('./info.txt', JSON.stringify(info, null, '\t'), (error, datos) => {
            if(error) throw Error((`Error en lectura: ${error.message}`))
        })
    })

}

export default {
    realizarSolucion
}