var fs = require('fs');


fs.copyFile('./carpeta1/archivo.txt', './carpeta2/archivoCopiado.txt',(error)=>{
    if (error) {
        console.log("Archivo No Copiado");        
    } else {
        console.log("Archivo Copiado exitosamente");    
        fs.writeFile('./carpeta1/archivoEscrito.txt','Archivo copiado OK',(error)=>{
            console.log('Proceso Finalizado');            
        });    
    }
})
