//importar as configurações do servidor
var application = require('./config/server');

//parametrizar a porta que escuta
application.listen(3000, function (){
    console.log('servidor online');
});