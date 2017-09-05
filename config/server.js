//importar o módulo do framework express
var express = require('express');

//importar módulo consign
var consign = require('consign');

//importa o módulo body-parser
var bodyParser = require('body-parser');

//importa o módulo do express-validator
var expressValidator = require('express-validator');

//iniciar o objeto express
var application = express();

//setar as variaveis que as 'view exgine' e 'views' do express
application.set('view engine', 'ejs');
application.set('views', './app/views');

//configurar o middleware express.static
application.use(express.static('./app/public'));

//configurar o middleware body-parse
application.use(bodyParser.urlencoded({extended: true}));

//configurar o middleware express-validator
application.use(expressValidator());

//efetua o autoload das rotas, dos models e dos controllers, dentro do objeto application
consign()
        .include('app/routes')
        .then('app/models')
        .then('app/controllers')
        .into(application);

//exportar o objeto application
module.exports = application;