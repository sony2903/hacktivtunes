const fs = require('fs')
const controller = require('./controller')
const argv = process.argv.slice(2)
const command = argv[0]
const param = argv[1]

// console.log(command)
// console.log(controller.show)

//show
switch(command){
    case 'show':
        controller.show()
        break
    case 'delete':
        // controller.show()
        controller.delete(param)
        break
}
