const path = require('path') //es un modulo de node js que nos ayuda con los directory paths y tambien para usar normalize y join
const express = require('express')
const method = require('method-override')
const app = express() //para levantar el servidor creo

app.set('port', process.env.PORT || 3000) //seteamos el puerto
app.set('views', path.resolve(__dirname,'views')) //esto es porque usamos un template engine como ejs, le estamos diciendo donde vamos a tener las vistas, en la carpeta views
app.set('view engine', 'ejs') //esto es para que nuestro proyecto sepa que vamos a usar ejs

app.listen(app.get('port')) //hasta aca ya se levanta el servidor.

app.use(express.static(path.resolve(__dirname, '../public'))) //este es un middleware porque es previo a procesar una ruta. Se usa un middleware cuando queres que, antes de llegar a la ruta, exista cierta configuracion
app.use('/uploads',express.static(path.resolve(__dirname, '../uploads')))
app.use(express.urlencoded({extended:true})) //este es un middleware porque es previo a procesar una ruta. Se usa un middleware cuando queres que, antes de llegar a la ruta, exista cierta configuracion
app.use(method("m")) //este es un middleware porque es previo a procesar una ruta. Se usa un middleware cuando queres que, antes de llegar a la ruta, exista cierta configuracion
//aunque tambien existen middlewares entre ruta y controlador. O sea aparentemente no siempre son necesariamente antes de una ruta.
app.use(require('./routes/home'))
app.use('/proyectos',require('./routes/projects'))
app.use('/users',require('./routes/users'))
app.use('/files',require('./routes/files'))
