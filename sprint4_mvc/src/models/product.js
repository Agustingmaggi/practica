/* const path = require('path') //nos ayuda a ver donde esta el archivo de la carpeta data al que queremos llegar
const fs = require('fs') //nos ayuda a interactuar con ese mismo archivo, para leerlo, escribir, etc
const model = {
    info: () => JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','products.json'))), //esto es para leer el json
    store: data => {
        let all = model.info() // aca almaceno todos los productos
        let id = all.length > 0 ? all[all.length -1].id + 1 : 1 //esto es para calcular el id del ultimo proyecto en el array del json
        let productoNuevo = {
            id:id,...data} //creo que pone id:id porque la variable id ya fue calculada antes entonces la redefine con el calculo de arriba, lo de data es para que tome los valores (nombres, precio, etc) de la misma manera en la que se lo enviemos mediante el formulario de creacion de proyectos
            //hasta aca está creado el producto, ahora hay que meterlo en la lista
            all.push(productoNuevo)//agregamos el producto a la lista de all
            fs.writeFileSync(path.resolve(__dirname,'..','data','products.json'),JSON.stringify(all,null,2)) //reescribimos la info en el archivo json
            //el 2 de ahi arriba es para que cuando se escriba en el json se aga dejando un espacio desde el principio, asi está prolijo
            return productoNuevo            
    }
}

module.exports = model
*/
//hasta aca es la clase crud 1, en las siguientes hace lo mismo pero de maneras distintas
//lo de abajo lo hizo en la clase "receso" que es despues de crud 1, es lo mismo pero typeado de manera distinta. 

const path = require('path')
const fs = require('fs')
const file = require('./file')
const model = {
    file: path.resolve(__dirname,'..','data','products.json'), //guardo la ruta en el metodo file
    read: () => fs.readFileSync(model.file), //leo el archivo de data a traves de la ruta que puse arriba
    write:data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)),
    //ahora, ademas de leerlo, necesito transformar esa data que está en modo json a un formato que pueda mandar a la vista asi que parseamos ese json a datos que yo utilice
    all: () => JSON.parse(model.read()),
    generate: data => Object({ //este generate recibe la info que yo le pase (desde el cotrolador creo) y va a armar el objeto que va a guardarse en la data
        id: model.all(). length == 0 ? 1 : model.all().pop().id + 1,
        name: data.name,
        price: parseInt(data.price), //aca pondriamos solo data.price pero como está en formato texto en el json y queremos un nro, le ponemos parseInt o parseFloat
        offert: data.offert ? true: false, //esto es porque en el ejemplo de clase, hay productos que tienen ofertas y otros que no..
        image: data.files.map(f=>file.create(f).id)
    }),
    //ahora que ya tenemos la funcion que genera el proyecto que queremos guardar, tenemos que agregarlo a la lista de todos los productos
    create: data => {
        let newProduct = model.generate(data)
        let all = model.all()
        all.push(newProduct)
        model.write(all)
        return newProduct
    },
    //ahora tenemos que agregar la info de arriba a un archivo json. No entiendo por que está este comentario aca, creo que esta mal
    search: (field, value) => model.all().find(element => element[field] == value),
    update: (id, data) => {
        let all = model.all()
        let updated = all.map(e =>{
            if(e.id == id){
                e.name = data.name
                e.precio = data.precio
                e.offert = data.offert ? true : false
                return e
            }
            return e 
        }) //aca modificamos el producto, ahora tenemos que esribir esta info en el archivo json
        model.write(updated)
        let product = model.search('id',id)
        return product
    },
    delete: id => model.write(model.all().filter(e => e.id != id))
    
}

module.exports = model
