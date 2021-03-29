const fs = require('fs')
const controller = require('./controller')

class Playlist{
    constructor(id, name, type, limit){
        this.id = id
        this.name = name
        this.type = type
        this.limit = limit
        this.song = []
    }
    }
}

class Song{
    constructor(inputName, inputGroup, inputDuration){
        super()
        this.name = inputName
        this.group = inputGroup
        this.duration = inputDuration
    }
}



module.exports = {
    Playlist : Playlist,
    Song : Song
}