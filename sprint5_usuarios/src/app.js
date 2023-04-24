const express =require('express')
const path = require('path')
const cookie = require('cookie-parser')
const session = require('express-session')
const app = express()


app.set('port',process.env.PORT || 3030)
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, './views'))

app.listen(app.get('port'), () => console.log('Listening on port http://localhost:' + app.get('port')))

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.static(path.resolve(__dirname, 'uploads')))

app.use(express.urlencoded({extended:true}))
app.use(cookie())
app.use(session({
    secret: 'digital', //la palabra que le ponemos a secret es cualquiera que querramos utilizar para atrapar ese dato de la sesion
    saveUninitialized: true, //esto siempre es asi, es por si vas a tener datos preguardados, algo asi
    resave: false //este siempre es asi porque no queremos que guarde nada, algo asi, es un tema de cache
}))

app.use(require('./middlewares/user'))

app.use(require('./routes/main'))
app.use('/users',require('./routes/user'))