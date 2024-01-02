function calcular() {
    var inicial = parseInt(document.getElementById('inicial').value);
    var final = parseInt(document.getElementById('finall').value);
    var passo = parseInt(document.getElementById('passos').value);
    var contador = inicial;
    var resultado = '';

    while (contador <= final) {
        resultado += `O valor é de: ${contador}⬇️<br>`;
        contador += passo;
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    var resultContainer = document.getElementById('progressaoResultado');
    resultContainer.innerHTML = resultado;
}
