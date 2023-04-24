//const path = require('path'); //una vez descargado el template engine (en este caso ejs), no necesitamos mas el path porque lo pusimos
//con el app.set views, y con eso ya sabe donde buscar las vistas
const controller = {
    index: (req, res) => res.render('index',{ //gracias al ejs, podemos poner el codigo asi de corto sin el send.File y demas
    style: 'main'}) 

    //le ponemos de nombre index porque el archivo que queremos mostrar se llama index, cuando querramos mostrar log in, register o 
    //cualquier otro archivo, le ponemos el nombre de ese archivo
}

module.exports = controller