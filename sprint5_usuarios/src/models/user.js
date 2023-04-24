const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')
const validator = require('express-validator')

const model = {
    file: path.resolve(__dirname, '../data', 'users.json'),
    read: () => fs.readFileSync(model.file, 'utf8'),
    write: data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)),
    all: () => JSON.parse(model.read()),
    search: (prop,value) => model.all().find(e => e[prop] == value ),
    generated: data => Object({
        id: model.all().length == 0 ? 1 :model.all().pop().id + 1,
        email: String(data.email),
        password: bcrypt.hashSync(data.password,10),
        isAdmin: String(data.email).includes('@digitalhouse.com'),
        isActive: true //esto es porque el prof explico que cuando "eliminas" tu usuario de una pagina, no se elimina sinoq ue se pone como inactivo..
    }), //ya tenemos la func que genera el usuario, ahora creamos una que meta a ese usuario creado en nuestro json
    create: data => {
        let all = model.all() //leo todos los usuarios
        let user = model.generated(data) // genero uno nuevo
        all.push(user)//lo meto en el listado
        model.write(all) //desplego el listado en el json
        return user //y lo devuelvo..
    },
    validate: [
        validator.body('email').isEmail().withMessage('Invalid Email'),
        validator.body('password').isLength({ min: 5}).withMessage('Min 5 characters')
    ]
}

module.exports=model