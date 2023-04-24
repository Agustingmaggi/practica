const controller = require('../controllers/projects')
const express = require('express')
const router = express.Router()

const path = require('path')
const multer = require('multer')
const upload = multer({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname,'../../uploads')), //destination es un metodo de diskStorage que nos va a permitir definir a donde van a ir las imagenes que yo publique.
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //filename es una prop para ponerle nombre a la carpeta de destination
})})


//en los routers.get dice controller. porque es el nombre de la variable mas arriba
router.get('/',controller.listaProyectos) //listaProyectos es un metodo de la variable controller que se encuentra dentro del controlador
router.get('/crear',controller.create) //create es un metodo de la variable controller que se encuentra dentro del controlador
router.get('/:id',controller.show) //las rutas parametrizadas van despues de las rutas normales. nunca antes
router.get('/update/:id',controller.update)
router.put('/:id',controller.modify)
router.post('/guardar',[upload.any()],controller.save) //save es un metodo de la variable controller que se encuentra dentro del controlador
//estas rutas son todas proyectos/crear o proyectos/guardar o bueno solo proyectos para el primer router que es la lista de proyectos.
//la cuestion es que estas rutas de acá estan linkeadas dentro del app.js con el app.use(/proyectos) que requiere a este archivo
router.delete('/',controller.delete) //no le pone parametro porque dice que hace que envie, a traves del formulario, el id del producto que queres eliminar
 

module.exports = router