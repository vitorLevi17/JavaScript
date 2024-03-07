const Sequelize = require ('sequelize')


 const sequelize = new Sequelize('posts','root','',{
 host: "localhost",
 dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize:sequelize
}


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