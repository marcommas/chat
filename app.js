//importar as configurações do servidor
var application = require('./config/server');

//parametrizar a porta que escuta
//var server = application.listen(3000, function (){
var server = application.listen(80, function (){
    console.log('servidor online');
});


var io = require('socket.io').listen(server);

//Criar a conexão por websocket
io.on('connection', function(socket){
    console.log('Usuário conectou socket');
    
    socket.on('disconnect', function(){
       console.log('Usuário desconectou'); 
    });
});
