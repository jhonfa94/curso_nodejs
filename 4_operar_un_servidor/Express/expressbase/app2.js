var express = require('express');

/* 
  La variable app seria el contructor porque tiene todas las funciones y metodos
  de express
*/
var app = express();

//Establecemos que nuestra app ecuche en todos los verbos de http
app.all('/', function(peticion,respuesta){
  respuesta.send('Hola');//Enviamos la respuesta al navegdor
});

app.get('/acerca',function(peticion,respuesta){
  respuesta.send('ACERCA'); 
});

app.post('/guardar',function(peticion,respuesta){
  respuesta.send('GUARDAR'); 
});

app.delete('/eliminar',function(peticion,respuesta){
  respuesta.send('ELIMINAR'); 
});

app.put('/actualizar',function(peticion,respuesta){
  respuesta.send('ACTULIZAR'); 
});




/* 
  la variable server va a empezar a escuchar en un puerto especifico.
  Por cada vez que escuchemos una peticion, vamos a enrutar el trafico a hacia una ruta en espcifico  
*/
var server = app.listen('3000', function(){

});