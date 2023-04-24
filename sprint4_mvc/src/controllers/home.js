const productos = require('../models/product')
const controller = {
    index: (req, res) => res.render('index',{projects: productos.read(),css:'register'}) 
        //lo que va aca, por ejemplo el title, es una variable que le compartis a la vista de ejs, ver el archivo renderizado (index)
        //para ver como imprimi con ejs la variable title, chequear en la web que dice capo.
}

module.exports=controller