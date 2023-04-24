const express = require('express')
const app = express()
app.listen(3000)

const db = require('./database/models')
const sequelize = require('sequelize')
const op = sequelize.Op
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) => {
    const moviesHarry = db.Movie.findAll({
       // where: {title:{[op.like]:"%Harry%"}},
        //limit:2
    })
    
    /*const moviesGuerra = db.Movie.findAll({
        where: {title:{[op.like]:"%Guerra%"}},
        order: [['id','DESC']]
    })*/
   // Promise.all([moviesHarry,moviesGuerra])  // si no pongo esta linea solo me devuelve la segunda constante        
    .then(result =>res.send(result))
    .catch(err=>res.send(err))
})

app.set('view engine', 'ejs')
app.use('/movies',require('./routes/movies'))

/* app.get('/movies',(req, res) => {
    res.send("hola!")
})
*/