/*  
    Tenemos modulos preinstalados en el core de node como: 
    http, url, path, fs
    Nos permite interactual con el sistema interno y externo
    fs=> file system
    path=> rutas del sistema local
*/

/* 
    El paquete util nos permite v
*/

var util = require('util');
var http = require('http');

var prueba = "10";
console.log(util.isNumber(prueba));
console.log(util.isString(prueba));
console.log(http.ClientRequest);

