/* 
Utilizamos los modulos que ya estan preinstalados en el servidor

*/

//Este modulo se encarga de manejar todas peticiones http con internet
var http = require('http');

var servidor = http.createServer(function(){

    console.log('Petición web'); //Mediante la consola podemos ver cuando se esta realizando una peticion http

});

//Especificamos que el servidor inice por el puerto 3000
servidor.listen(3000);

//Mensaje en consola
console.log("Ejecutando Servidor NodeJS");

// Ejecutamos el servidor con nodemon
// nodemon 2_crear_servidor.js
/* 
    Nos dirigimos al navegador web que tengamos instalado en el equipo y escribimos la direccion web
    localhost:3000
    o 
    127.0.0.1:3000
*/
