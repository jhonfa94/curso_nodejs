/* Express es un framework que ayuda configurar el servidor web de nodejs

    npm install express-generator -g
    el -g es para que nos quede de forma global

    Una vez instalado el express-generator podemos hacer uso de el desce cualquier parte de nuestra ubicación del sistema

    Nos ubicamos dentro de nuestra ruta del sistema donde se va a realizar el siguiente comando 

    express --view=pug expressbase
    
    express => llamamos el comando 
    --view=pug => el sistema de plantillas de pug
    expressbase => nombre de la plantilla

    Al presionar enter nos crea una carpeta dentro del directorio

    Luego nos sugiere que entremos al directorio de instalacion 
    cd expressbase
    Posteriormnete ejecutar el comando para que se nos instale las dependencias
    npm install
    Luego de Finalizar la instalacion procedemos a ejecutar el comando 
    npm start 
    Con esto se nos inicia el servidor express en el puerto 3000
    Vamos al navegador con la direccion localhost:3000



    # RUTAS 
    Para hacer debug a nuestra app, y luego inicie lo hacemos con el siguiente comando
    SET DEBUG=expressbase:* & npm start
    SET DEBUG => es la sintaxis para hacer debug a nuestro proyecto 
    =expressbase:* => nombre del proyeto al cual se le va hacer el debug y se le indica con el * que acople todo el proyecto 
    & npm start => para que luego inice el proyecto en consola

    

*/