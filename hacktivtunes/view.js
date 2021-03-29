const fs = require('fs')
const controller = require('./controller')

class View{
    static show(data){
        console.log(data)
    }
    
    static delete(param){
        console.log(`
        =============
        SUCCESS
        =============
        data with id ${param} are deleted
        `)
    }
}






module.exports = View