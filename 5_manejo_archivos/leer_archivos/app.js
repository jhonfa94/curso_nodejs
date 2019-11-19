//REQUERIMOS fs de FILE SYSTEM
var fs = require('fs');

/* PRIMERA FORMA */
                        //ruta del archivo y la decoficacion del archivo o el encode
//var contenido = fs.readFileSync('./archivos/texto.txt','utf8');


/* SEGUNDA FORMA */
var contenido = fs.readFile('./archivos/texto.txt','utf8', function(error,datos){
    console.log(datos);
    
});

console.log("código "+contenido);
