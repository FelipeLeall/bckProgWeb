// Controller é um conjunto de funções associadas às operações sobre dados

const Turma = require('../../models/exemplo-professor/Turma')

const controller = {}   // Objeto vazio

// Operação CREATE, função novo()
controller.novo = async (req, res) => {
    // Usa os dados que chegam dentro do body da requisição
    // e os envia o BD para a criação de um novo objeto
    try {
        await Turma.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch (erro) {
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// Operação RETRIVE (all), função listar()
controller.listar = async (req, res) => {
    try {
        //Traz todos os cursos cadastrados
        let dados = await Turma.find()
            .populate('curso', 'nome')
            .populate('professor')
            .populate('sala_aula', 'nome capacidade')
        res.send(dados)

    }
    catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação RETRIVE (one), função listar()
controller.obterUm = async (req, res)  => {
    try {
        const id = req.params.id
        let obj = await Turma.findById(id)
        //O objeto existe e foi encontrado
        if (obj) res.send(obj) //HTTP 200
        else res.status(404).end() //HTTP 404
    }
    catch{
        console.log(erro)
        res.status(500).send(erro)

    }

}

// Operação Update (one), função atualizar()
controller.atualizar = async (req, res)  => {
    try {
        const id = req.body._id
        let ret = await Turma.findByIdAndUpdate(id, req.body)
        //Se encontrou e achou
        if(ret)res.status(204).end()
        //Não encontrou
        else res.status(404).end()

    }
    catch{
        console.log(erro)
        res.status(500).send(erro)


    }

}

// Operação Delete, função excluir()
controller.delete = async (req, res)  => {
    try {
        const id = req.body._id
        let ret = await Turma.findByIdAndDelete(id, req.body)
        //Se encontrou e achou
        if(ret)res.status(204).end()
        //Não encontrou
        else res.status(404).end()

    }
    catch{
        console.log(erro)
        res.status(500).send(erro)
    }

}

module.exports = controller