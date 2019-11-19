var express = require('express');
var router = express.Router();
//Importamos la libreria de file system
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

  fs.readFile('./public/json/libros.json',(error,datos)=>{
    
    if (error) {
      res.write('Error de lectura del archivo JSON');
    } else {
      res.render('index', { datos: JSON.parse(datos) });      
    }


    

  });

});

module.exports = router;
