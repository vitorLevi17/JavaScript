
function carregar() {

        var mensagem = window.document.getElementById('mensagem')
        var imagem = window.document.getElementById('imagem') 
        var data = new Date()
        var hora = 12
        //data.getHours()
        mensagem.innerHTML = `Agora são ${hora} horas.`;

        if(hora >= 5 && hora < 18 ){
                mensagem.innerHTML = mensagem.innerHTML + ` Tenha um bom dia`
                imagem.src = 'pexels-asad-photo-maldives-457882.jpg'
                document.body.style.background = '#f08080'
        } else{
                mensagem.innerHTML = mensagem.innerHTML + ` Tenha uma boa noite`
                imagem.src = 'pexels-melissa-698907.jpg'
                document.body.style.background = '#c08080'
        }

}
