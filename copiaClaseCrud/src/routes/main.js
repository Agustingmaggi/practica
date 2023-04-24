//la idea es que el nombre de este archivo sea el mismo nombre del archivo de la carpeta controllers con el cual va a interactuar
//por eso este archivo se llama main, porque interactua con el main de controllers.
const controller = require('../controllers/main')
const express = require('express')
const router = express.Router()

router.get('/',controller.index) //este .index esta dentro del objeto literal del controller, si el objeto se llamase pizza, pondriamos .pizza 

module.exports = router

//exporto routers porque es la constante que almacena