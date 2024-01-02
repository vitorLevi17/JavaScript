function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('ano');
    var result = document.querySelector('div#saida');

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('O ano tá errado aí, meu chapa!');
    } else {
        var sex = document.getElementsByName('sexo');
        var idade = ano - Number(fAno.value);
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        var genero = '';
        if (sex[0].checked) {
            genero = 'homi';
            if (idade < 18) {
                img.src = 'NeymarJr.jpg';
            } else if (idade > 18 && idade < 50) {
                img.src = 'Ronaldoinalnassr.jpg';
            } else {
                img.src = 'baixados.jpg';
            }
        } else {
            genero = 'muie';
        }
        result.style.textAlign = 'center';
        result.innerHTML = `É ${genero} de ${idade} anos`;
        result.appendChild(img); // Adiciona a imagem à div de saída
    }
}