const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password_folder:{type:String, required:false},
    usuario_id:{type: mongoose.ObjectId, ref: 'Usuario', required: true},
    anotacao_id:{type: mongoose.ObjectId, ref: 'Usuario', required: false}
    
})
module.exports = mongoose.model('Pasta', esquema, 'pasta')
