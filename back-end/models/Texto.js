const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    font:{
        type:String,
        required: true
    },
    font_link:{
        type:String,
        required: true
    },
    
})
module.exports = mongoose.model('Texto', esquema, 'texto')
