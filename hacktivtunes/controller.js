const fs = require('fs')
const view = require('./view.js')
const dataImport = fs.readFileSync('./data.json', 'utf8')
let data = JSON.parse(dataImport)

// console.log(data)

class Controller{
    static delete(param){
        data.splice(param-1, 1)
        fs.writeFileSync(`./data.json`,JSON.stringify(data,null,2),`utf8`)
        view.delete(param)
    }

    static show(){
        view.show(data)
    }


}

module.exports = Controller