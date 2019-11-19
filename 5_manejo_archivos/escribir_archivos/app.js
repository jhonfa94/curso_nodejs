var fs = require('fs');

/* 
    - ruta del archivo
    - informacion a guardar
    - callback, recibe el parametro de error por si se tiene

    # En caso de que no se encuentre el archivo se va a crear

    writeFile => Escribe el documento desde cero y no esta lo crea
    Append => nos permite agregar mas información a un archivo una vez este exista
*/
fs.appendFile('./archivo/texto2.txt',' Nuevos Datos', (error)=>{
    if (error) {
        console.log("Error al escribir el archivo ");        
    }else{
        console.log("Archivo modificado exitosamente");
        
    }
});


