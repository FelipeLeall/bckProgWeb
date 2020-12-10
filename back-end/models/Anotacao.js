const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required: false
    },
    pasta_id:{type: mongoose.ObjectId, ref: 'Pasta', required: false},
    usuario_id:{type: mongoose.ObjectId, ref: 'Usuario', required: true},
    interface_id:{type: mongoose.ObjectId, ref: 'Interface', required: false},
    texto_id:{type: mongoose.ObjectId, ref: 'Texto', required: false}

    
})
module.exports = mongoose.model('Anotacao', esquema, 'anotacao')
