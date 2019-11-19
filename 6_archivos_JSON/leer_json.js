var fs = require('fs');
/* 
    Para leer un archivo JSON de forma externa lo que se debe hacer es: 
     - importar la libreria de file system (fs)
     - luego hacemos uso del metodo readFile el cual nos permite leer el archivo 
     - en el se debe especificar la ruta del archivo json
     - luego pasamos un callback para el funcionamiento el cual recibe dos parametro uno para el erro y otro para los datos 
     - Si se imprime directamente los datos del json los toma como si fuese un archivo binario, es decir que no lo lee como JSON
     - Para esto se debe convertir el archivo que se importa, nuevamente a formato JSON, mediante el JSON.parse(archivo), con esto ya se puede hacer uso del archivo JSON


*/
fs.readFile('./archivos/libros.json',(error,datos)=>{
    //console.log(datos);
    let jsonDatos = JSON.parse(datos);
    console.log(jsonDatos.libro + ' '+jsonDatos.autor);
    
})