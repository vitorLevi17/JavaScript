const express = require("express")
const app = express();
const hand = require('express-handlebars')


    //INDETIFICAÇÕES DO BANCO
const Sequelize = require ('sequelize')
const sequelize = new Sequelize('cadastro','root','',{
    host: "localhost",
    dialect: 'mysql'
})

//config
    //template end
    app.engine('hand',handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

app.listen(8081, function servidor() {
    console.log("Servidor rodando")
})

app.get("/",function rota(req,res) {
    res.sendFile(__dirname + "/templates/index.html")
})
/*
app.get("/login",function rota(req,res) {
    res.sendFile(__dirname + "/templates/login.html")
})

app.get("/ola/:nome/:cargo/:teste",function rota(req,res) {
    res.send("Olá"+req.params.nome)
})*/



/*AUTENTICAÇÃO BD

sequelize.authenticate().then(function () {
    console.log("Tudo certo")
}).catch(function (erro) {
    console.log("Falha ao conectar"+erro)
}) 

//CRIAR TABELA BD
const Posta = sequelize.define('posta',{
    titulo : {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Posta.create({
    titulo: "Unha pintada",
    conteudo: "Eu vou postar so pra doer em vc"
})

const Func = sequelize.define('func',{
    nome : {
        type: Sequelize.STRING
    },
    idade :{
        type: Sequelize.INTEGER
    },
    UF : {
        type: Sequelize.STRING
    },

    DESCRICAO :{
        type: Sequelize.TEXT
    }
})

//SICRONIZAR COM BD
Func.sync({force: true})
*/
  