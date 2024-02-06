const express = require("express")
const app = express();

app.get("/",function rota(req,res) {
    res.sendFile(__dirname + "/templates/index.html")
})

app.get("/login",function rota(req,res) {
    res.sendFile(__dirname + "/templates/login.html")
})


app.get("/perfil",function rota(req,res) {
    res.send("Bem ")
})


app.get("/ola/:nome/:cargo/:teste",function rota(req,res) {
    res.send("Olá"+req.params.nome)
})

app.listen(8081, function servidor() {
    console.log("Servidor rodando")
})