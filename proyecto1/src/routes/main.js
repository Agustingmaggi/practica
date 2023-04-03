//la idea es que el nombre de este archivo sea el mismo nombre del archivo de la carpeta controllers con el cual va a interactuar
//por eso este archivo se llama main, porque interactua con el main de controllers.
const main = require('../controllers/main')
const express = require('express')
const router = express.Router()

router.get('/',main.index)

module.exports = router




//exporto routers porque es la constante que almacena