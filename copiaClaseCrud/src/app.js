const path = require('path')
const express = require('express');
const method = require('method-override');
const app = express(); //esto es para levantar el servidor creo

app.set('port', process.env.PORT || 3000) //esto es para setear el puerto
app.set('views', path.resolve(__dirname, 'views')) //esto es porque usamos ejs u otro template engine, con esto le decimos que donde vamos a almacenar toda la info es en la carpeta views
app.set('view engine', 'ejs') //esto tambien es porque usamos ejs

app.listen(app.get('port'), () => console.log('listening on port http://localhost:' + app.get('port'))) //esto es para definir on observador del puerto que seteaste


//app.get('/',(req, res) => res.sendFile(path.resolve(__dirname,"./views/index.html"))) 
//con esto le decis al servidor que responda lo que esta dentro del res.send cuando alguien llame al puerto 3000
//por otro lado, lo pongo como comentario porque en la clase de modelo vista controlador, separamos el codigo de app.get en otros archivos


app.use(express.static(path.resolve(__dirname,"../public"))) //para que exponga todo lo que está en la carpeta public
//ver clase "intro a servidores" o nro 42 de 50 en playground, minuto 1:07:00 aprox para ver por que usamos sendFile, __dirname y demas.
app.use(express.urlencoded({extended:true})) //sirve para interpretar la informacion que llega desde un formulario, si pones false te muestra la info del formulario de una manera distinta, al prof le gusta true
app.use(method("m")) // esto lo agregamos porque instalamos method override. Dentro del parentesis, o sea el parametro, lo ponemos segun lo que nosotros vayamos a escribir dentro de un formulario para que definamos cuales de los metodos extra (put path delete) vamos a utilizar. Se ve de la sig manera : ?m=PUT o ?m=DELETE

app.use(require('./routes/main'))
app.use('/usuarios',require('./routes/users'))
app.use('/productos',require('./routes/products'))