const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    name_theme:{
        type:String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    desc:{
        type:String,
        required: false
    }
})
module.exports = mongoose.model('Interface', esquema, 'interface')
