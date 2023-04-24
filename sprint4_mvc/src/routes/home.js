const controller =require('../controllers/home')
const express = require('express')
const router = express.Router()

router.get('/',controller.index) //este .index esta dentro del objeto literal del controller (no es lo renderizado sino el nombre del objeto o sea lo que dice index:) 

module.exports = router

//el nombre de este archivo tiene que ser el mismo que el nombre del controlador al cual esta conectado, en realidad creo que
//es por una cuestion de buena practica porque no debe hacer falta que los nombres sean iguales

// las rutas parametrizadas como router.get("/:id") van antes que las no parametrizadas como router.get("/create")
//creo que lo de parametrizado o no es cuestion de los dos puntitos o sea :