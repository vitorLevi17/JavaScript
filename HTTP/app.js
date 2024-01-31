var http = require ('http')


http.createServer(function(req, res){
    res.end("Olá vc")
}).listen(8081)

console.log("Servidor criado")