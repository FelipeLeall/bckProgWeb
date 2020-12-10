const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    login_name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    nickname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: false
    }
})
module.exports = mongoose.model('Usuario', esquema, 'usuario')
