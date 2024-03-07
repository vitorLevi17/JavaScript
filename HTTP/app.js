const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Posts')


    app.engine('handlebars', handlebars.engine ({
        defaultLayout: 'main', runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }
    }))
    app.set('view engine', 'handlebars');


        //Body parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

        app.listen(8081, function servidor() {
            console.log("Servidor rodando")
        })

            app.get("/NovoPost",function rota(req,res) {
                res.render('formulario')
            })

                app.post("/add",function rota(req,res) {
                    Post.create({
                        titulo: req.body.titulo,
                        conteudo: req.body.conteudo
                    }).then(function(){
                        res.redirect('/')
                }).catch(function(erro){
                    res.send("deu ruim aqui"+erro)
                })
                })

                    app.get('/',function rota(req,res) {
                        Post.findAll({order: [['id','DESC']]}).then(function(posts){
                            console.log(posts)
                            res.render('home',{posts: posts})   
                        })
                    })

                        app.get('/deletar/:id',function rota(req,res){
                            Post.destroy({where: {'id':req.params.id}}).then(function(){
                                res.send("mensagem deletada")
                        }).catch(function(erro){
                            res.send("mensagem não existe")
                        })
                        })


  