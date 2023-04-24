const path = require('path') 
const fs = require('fs')
const model = {
    info: () => JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json'))),
    store: data => {
        let all = model.info()
        let id = all.length > 0 ? all[all.length -1].id + 1 : 1
        let productoNuevo = {
            id:id,...data}
            all.push(productoNuevo)
            fs.writeFileSync(path.resolve(__dirname,'..','data','users.json'),JSON.stringify(all,null,2))
            return productoNuevo            
    }
}

module.exports = model