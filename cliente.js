
var net = require('net'); 
const rl = require('./lee'); 

var client = net.connect({ port: 8080 }, function () { 
    console.log('Hola!Bienvenido al Sistema LAB_273....!!');
    console.log('Para Iniciar,ingrese usuario y pasword (ussuario/pasword)');
});


rl.on('line', function (msg) { 
    if(msg == 'adios...!'){  
        rl.close();
        client.end(); 
    }else{
        client.write(msg); 
    }
});

client.on('data', function (data) { 
    console.log(data.toString());
});

client.on('end', function () {  
    console.log('desconectado del servidor....!');
});

