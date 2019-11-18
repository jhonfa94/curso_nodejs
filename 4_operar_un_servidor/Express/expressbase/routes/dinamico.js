var express = require('express');
var router = express.Router();

router.get("/", function(peticion,respuesta){
    //respuesta.send("Informacion Dinamica");
    respuesta.render("dinamico");
});

/* router.get("/:datoURL/:masParametros", function(peticion,respuesta){
    respuesta.send("Informacion dinamica: "+peticion.params.datoURL+ peticion.params.datoURL.masParametros);
}); */

/* Con los dos puntos indicamos que viene un parametro por la url 
Por medio de los params indicamos que almacene el dato url en una variable del objeto JSON
*/
router.get("/:datoURL/:ID", function(peticion,respuesta){
    respuesta.render("dinamico",{
        datos:{
            titulo:peticion.params.datoURL,
            ID:peticion.params.ID,
        },
    });
    //respuesta.send("Informacion dinamica: "+peticion.params.datoURL);
});


module.exports = router;