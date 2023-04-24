const usuarios = require('../models/user')
const controller = {
    register: (req, res) => res.render('users/register',{css:'register'}), //le pongo el css aca solo para mostrar que tambien se le puede pasar a la vista un css por aca
    login: (req, res) => res.render('users/login',{css:'register'}),  
    //esto lo hizo en la clase de sprint3
    listaDeUsuarios: (req, res) => res.render('users/lista',{listado: usuarios.info()}),
    nuevoUsuario: (req, res) => res.render ('users/crearUser'),
    guardar: (req,res) =>  {
        
        let result = usuarios.store(req.body)
        return res.send(result)
    }
}

module.exports = controller