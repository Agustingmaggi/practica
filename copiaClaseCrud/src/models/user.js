const path = require('path'); //nos ayuda a ver donde esta el archivo de la carpeta data al que queremos llegar
const fs = require('fs'); //nos ayuda a interactuar con ese mismo archivo, para leerlo, escribir, etc
const model = {
    list: () => JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','users.json')))

}

module.exports = model