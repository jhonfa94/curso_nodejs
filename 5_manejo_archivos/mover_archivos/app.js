var fs = require('fs');

/* 
    Para mover un archivo de un directorio a otro se debe copiar y luego eliminar


*/

function copiarArchivo(rutaOriginal, nuevaRuta, archivoParaCopiar){

    fs.copyFile(rutaOriginal +'/'+ archivoParaCopiar, nuevaRuta +'/'+ archivoParaCopiar,(error)=>{
        if (error) {
            console.log('Problemas al copiar el archivo');
            
        } else {
            console.log("Archivo copiado correctamente a la ruta destino");
            
            //Procedemos a elimiar el archivo
            eliminarArchivo(rutaOriginal, archivoParaCopiar);
        }
    });

}

function  eliminarArchivo(rutaOriginal, archivoParaCopiar) {
    fs.unlink(rutaOriginal +'/'+ archivoParaCopiar,(error)=>{
        if (error) {
            console.log('Problemas para eliminar el archivo');
            
        } else {
            console.log('Archivo eliminado correctamente de su ruta original');
            
        }
    })
    
}

//Llamamos la funcion para copiar 
copiarArchivo('./carpeta1','./carpeta2','archivo.txt');