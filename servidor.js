
const net = require('net'); 

const server = net.createServer(function (connection) { 
   
    connection.on('end', function () {  
        console.log('Cliente desconect.....');
    });

    connection.on('data', function(data){   
       
        var user1 =["Dan Israel", "Copa Lupe", "dcopalupe", "123456"]
        var user2 =["Jose Andres", "Alanoca Quino", "jalanocaquino", "1q2w3e4"]
        var user3 =["Ana", "Condori Quispe", "acondoriquispe", "54321"]

        console.log('Cliente connectado.... :' + data);  
        var cad1 = data.toString()
        console.log(cad1)
        var cad2 =cad1.split("/", 2)
        var nu

        console.log(user1)
        console.log(cad2)
        console.log("imp 1")
        console.log(cad2[0]+" =? "+user1[2])
        console.log(cad2[1]+" =? "+user1[3])
        if(cad2[0]==user1[2] || cad2[1]==user1[3]){
            console.log("imp 2")
            if(cad2[0]=="dcopalupe" && cad2[1]=="123456"){
                console.log(cad2[1])
                data = "Bienvenido..! Dan Israel Copa Lupe"
                console.log(data)
                connection.write('respuesta del servidor: '+data+ ' ');
            }else{
                if(cad2[0]=="dcopalupe" && cad2[1]!="123456"){
                    data="pasword para dcopalupe es incorrecta"
                    console.log(data)
                    connection.write('respuesta del servidor: '+data+ ' ');
                    connection.write('Ingrese usuario y pasword (usuario/pasword)');
                }else{
                    if(cad2[0]!="dcopalupe" && cad2[1]=="123456"){
                        data="El usuario "+cad2[0]+" es incorrecto o no existe"
                        connection.write('respuesta del servidor: '+data+ ' ');
                        connection.write('Ingrese usuario y pasword (usuario/pasword)');
                        console.log(data)
                    }
                }
   
            }
        }
        console.log("bd "+cad2[0]+" "+user1[2])
        if(cad2[0]==user2[2] || cad2[1]==user2[3]){
            if(cad2[0]=="jalanocaquino" && cad2[1]=="1q2w3e4"){
                
                data = "Bienvenido..! Jose Andres Alanoca Quino"
                console.log(data)
               
            }else{
                if(cad2[0]=="jalanocaquino" && cad2[1]!="1q2w3e4"){
                    data="pasword para jalanocaquino es incorrecta"
                    console.log(data)
                    connection.write('respuesta del servidor: '+data+ ' ');
                    connection.write('Ingrese usuario y pasword (usuario/pasword)');
                }else{
                    if(cad2[0]!="jalanocaquino" && cad2[1]=="1q2w3e4"){
                        data="El usuario "+cad2[0]+" es incorrecto o no existe"
                        console.log(data)
                        connection.write('respuesta del servidor: '+data+ ' ');
                        connection.write('Ingrese usuario y pasword (usuario/pasword)');
                    }
                }
   
            }
        }
        if(cad2[0]==user3[2] || cad2[1]==user3[3]){
            if(cad2[0]=="acondoriquispe" && cad2[1]=="54321"){
                //console.log(cad2[1])
                data = "Bienvenido..! Ana Condori Quispe"
                console.log(data)
                
            }else{
                if(cad2[0]=="acondoriquispe" && cad2[1]!="54321"){
                    data=" pasword para acondoriquispe es incorrecta"
                    console.log(data)
                    connection.write('respuesta del servidor: '+data+ ' ');
                    connection.write('Ingrese usuario y pasword (usuario/pasword)');
                }else{
                    if(cad2[0]!="acondoriquispe" && cad2[1]=="154321"){
                        data="El usuario "+cad2[0]+" es incorrecto o no existe"
                        console.log(data)
                        connection.write('respuesta del servidor: '+data+ ' ');
                        connection.write('Ingrese usuario y pasword (usuario/pasword)');
                    }
                }
   
            }
        }
        
    });
});

server.listen(8080, function () {
    console.log('..Servidor esperando peticion de Cliente ......');
});

