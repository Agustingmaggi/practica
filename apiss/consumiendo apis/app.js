const express = require('express')
const app = express()
const path = require('path')
const fetch =require('node-fetch')
app.listen(3000)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended:false}))

app.get('/',function (req,res){
    fetch('https://swapi.dev/api/people/1/',{
        method:'GET',
        headers: {
            'Content-type':'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        res.send(data)
    })
    .catch(err =>{
        return res.send(err)
    })
})