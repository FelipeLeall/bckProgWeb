var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/exemplo-aula/index');
var usersRouter = require('./routes/exemplo-aula/users');

require('./node_modules/dotenv/config')
 

const db = require('./config/dataBase')
const dbUser = 'FelipeLeall'
const dbPass = 'Dyth0218'
const dbName = 'naotenhopaz'
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.no1fm.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)


var app = express();

const cors = require('cors')
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// const teste = require('routes/exemplo-aula/teste');
// app.use('/teste', teste);

const curso = require('./routes/exemplo-aula/curso');
app.use('/curso', curso);

const professor = require('./routes/exemplo-aula/professor');
app.use('/professor', professor);

const sala_aula = require('./routes/exemplo-aula/sala_aula')
app.use('/sala-aula', sala_aula)

const turma = require('./routes/exemplo-aula/turma')
app.use('/turma', turma)

/*
   ============================================================================================================== 
   =========================================== para o Capilhete =================================================
   ============================================================================================================== 
*/

const usuario = require('./routes/usuario')
app.use('/usuario', usuario)

const anotacao = require('./routes/anotacao')
app.use('/anotacao', anotacao)

const pasta = require('./routes/pasta')
app.use('/pasta', pasta)

const texto = require('./routes/texto')
app.use('/texto', texto)

const interface = require('./routes/interface')
app.use('/interface', interface)

module.exports = app;
