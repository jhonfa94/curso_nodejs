/* LOS MODULOS SON FUNCIONES YA ESTAN PROGRAMADAS Y SOLO ES HACER SU REPECTIVO USO */
//npm install moment

//Importamos el modulo
// Una regla o sugerencia es llamar el modulo a traves de la variable con el mismo nombre
/* 
    Cuando instanciamos o igualamos al requied estamos especificando que busque el paquete en node_modules
    y posterirmente encuentre el paquete que le estamos solicitando
*/
var moment  = require('moment');

console.log(moment('1994-12-31').format('YYYY-MM-DD H:m:s').toString());




