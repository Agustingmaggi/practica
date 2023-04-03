const path = require('path')
const express = require('express');
const app = express(); //esto es para levantar el servidor creo

app.set('port', process.env.PORT || 3000) //esto es para setear el puerto
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(app.get('port'), () => console.log('listening on port http://localhost:' + app.get('port'))) //esto es para definir on observador del puerto que seteaste


//app.get('/',(req, res) => res.sendFile(path.resolve(__dirname,"./views/index.html"))) 
//con esto le decis al servidor que responda lo que esta dentro del res.send cuando alguien llame al puerto 3000
//por otro lado, lo pongo como comentario porque en la clase de modelo vista controlador, separamos el codigo de app.get en otros archivos


app.use(express.static(path.resolve(__dirname,"../public")))
//ver clase "intro a servidores" o nro 42 de 50 en playground, minuto 1:07:00 aprox para ver por que usamos sendFile, __dirname y demas.

app.use(require('./routes/main'))