const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    formacao: {
        type: String,
        required: true
    },
    data_nascimento: {
        type: Date,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        index:{unique: true}
    },
    rg:{
        type: String,
        required: true
    },
    valor_hora_aula: {
        type: Number,
        required: true,
        min: 15.0,
        default: 20.75
    },
    email:{
        type: String,
        required: true,
        index:{unique: true}
    },
})

module.exports = mongoose.model('Professor', esquema, 'professores')