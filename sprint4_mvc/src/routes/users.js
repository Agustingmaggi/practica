const express =require("express");
const users = require('../controllers/users');
const router = express.Router();

router.get('/register', users.register)
router.get('/login', users.login)
router.get('/lista', users.listaDeUsuarios)
router.get('/nuevoUsuario', users.nuevoUsuario)
router.post('/guardar',users.guardar)

module.exports = router