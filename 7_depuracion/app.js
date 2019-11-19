var http = require('http');


var servidor = http.createServer(function (peticion,respuesta) {
    respuesta.writeHead(200,{'Content-type':'text/html'});
    respuesta.write("Respues para la direccion : " + peticion.url);
    console.log("peticion web");
    
})

servidor.listen(3000);

console.log("Ejecutando servidor NodeJS");

/* Ir a google chrome escribir chrome://inspect/
*/

//node --inspect app.js
/* 
    node => comando para ejecutar en consola 
    --inpect => instruccion para indicar que se va hacer una inspección
    app.js => archivo de configuración javascript para ser inspeccionado
*/
