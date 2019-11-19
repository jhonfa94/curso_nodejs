var fs = require('fs');

/* 
    - Para copiar los archivos se utiliza el comando copyFile
    - Tiene como parametros lo siguiente: 
        -- ruta del archivo original
        -- ruta de destino y se asigna el nuevo nombre
        -- callback donde se pasa como argumento el error si existe

*/

fs.copyFile('./archivos/archivo_original.txt','./archivos/archivo_copiado.txt',(error)=>{
    if (error) {
        console.log("Error al copiar");
        throw error; //mostramos el error        
    } else {        
        console.log("Copia exitosa");
    }
})

