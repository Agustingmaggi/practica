const controller =require('../controllers/files')
const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')
const upload = multer({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname,'../../uploads')), //destination es un metodo de diskStorage que nos va a permitir definir a donde van a ir las imagenes que yo publique.
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //filename es una prop para ponerle nombre a la carpeta de destination
})})

router.get('/',controller.upload) //este .index esta dentro del objeto literal del controller (no es lo renderizado sino el nombre del objeto o sea lo que dice index:) 
//una vez que configuramos el upload, necesitamos una ruta para que viaje asi que hacemos lo sig:
router.post('/',[upload.any()],controller.store)

module.exports = router