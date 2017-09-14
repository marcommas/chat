//importar as configurações do servidor
var application = require('./config/server');

//parametrizar a porta que escuta
//var server = application.listen(3000, function (){
var server = application.listen(80, function (){
    console.log('servidor online');
});


var io = require('socket.io').listen(server);

application.set('io', io);

//Criar a conexão por websocket
io.on('connection', function(socket){
    console.log('Usuário conectou socket');
    
    socket.on('disconnect', function(){
       console.log('Usuário desconectou'); 
    });
    
    socket.on('msgParaServidor', function(data){
        
        /*evento de dialog*/
        socket.emit(
                'msgParaCliente', 
                {apelido: data.apelido, mensagem: data.mensagem}
            );
        
        socket.broadcast.emit(
                'msgParaCliente', 
                {apelido: data.apelido, mensagem: data.mensagem}
            );
            
        /* participantes */
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit(
                    'participantesParaCliente', 
                    {apelido: data.apelido}
                );

            socket.broadcast.emit(
                    'participantesParaCliente', 
                    {apelido: data.apelido}
                );
        }
    });
});
