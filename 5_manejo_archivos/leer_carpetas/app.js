var fs = require('fs');

/* 
    - Especificamos la ruta del directorio
    - Con el objeto indicamos que nos muestre el tipo de archivos
    - Mediante una funcion callback ejecutamos el retorno de la rectura
*/
fs.readdir('./archivos/',{withFileTypes:true},(error,items)=>{
    /* Al ejecutar  */
    console.log(items);    
});