/* const product = require('../models/product')
const controller = {
    listaProyectos: (req, res) => res.render('products/proyectos',{info: product.info()}), //por alguna razon que desconozco (tal vez por el ejs, tal vez por el path del app.js) acá se puede poner 'proyectos' sin poner ../views e igual funciona
    create: (req, res) => res.render ('products/creacion'), //para cada metodo, una ruta, para cada ruta un controlador. tanto create como save son metodos, por eso aca creamos funciones para ambos
    save: (req,res) =>  {
    req.body.precio = parseFloat(req.body.precio)
    let result = product.store(req.body)
    return res.send(result)
    }
}

module.exports=controller
*/ 

//hasta aca es la clase crud 1, en las siguientes hace lo mismo pero de maneras distintas
//lo de abajo lo hizo en la clase "receso" que es despues de crud 1, es lo mismo pero typeado de manera distinta. 


const product = require('../models/product')
const file = require('../models/file')

const controller = {
    listaProyectos: (req, res) => res.render('products/proyectos',{
        styles: ['products/list'],
        title: 'Productos',
        products: product.all().map(p => Object({...p, image: file.search('id',p.image)}))
    }),
    create: (req,res) => res.render('products/creacion',{
        styles: ['products/create'],
        title: 'Nuevo Producto'
    }),
    save: (req, res) =>{
        req.body.files =req.files
        let created = product.create(req.body);
        return res.send(created)
    },
    show: (req, res) => {
        let result = product.search('id', req.params.id) //asi como la info de un formulario viene del body, la info de un objeto viene del parametro, id es un parametro asi que ponemos params
        return result ? res.render('products/detail',{
            styles: ['products/list'],
            title: 'Producto | ' +result.name,
            product: result 
        }) : res.render('error',{
            msg: 'Producto no encontrado'
        })
    },
    update: (req, res) => res.render('./products/update',{
        styles: ['products/list'],
        title: 'Actualizar',
        product: product.search('id',req.params.id)
    }),
    modify: (req, res) =>{
        let updated = product.update(req.params.id,req.body) //dos parametros, req.params es el id que le pasamos, req.body es la info que viene desde el body
        return res.send(updated)
    },
     delete: (req, res) => {
        product.delete(req.body.id)
        return res.redirect('/proyectos') //redirect tiene que ser una ruta tipo GET necesariamente
     }
}
module.exports=controller