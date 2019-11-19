var fs = require('fs');
/* 
    Para elimnar un archivo se debe utilizar el metodo a unlink
    Una vez es eliminado no queda en ninguna papelera.
    Recibe como parametros lo siguiente:
        - Ruta del archivo a eliminar
        - callback para mostrar un error en caso de que se de


*/

fs.unlink('./archivos/archivo_copiado.txt',(error)=>{
    if (error) {
        console.log('Error');
        throw error;        
    } else {
        console.log('Archivo eliminado exitosamente');
        
    }
})

