var valor = parseInt(document.getElementById('numeros').value)
var sele = document.getElementById('selTab')
var resultContainer = document.getElementById('Resultado')
var array = []       


function adicionarValores(){
 
    
            item.text = `O valor ${valor} foi adicionado`
                array.push(valor)
                sele.appendChild(item)

                console.log(array[0])
            
}

function finalizar(arr) {

    recebeArray()
    // tamanho do vetor
    var tamanho = arr.length
    // maior valor 
    var maiorValor = Math.max(arr)
    // menor valor
    var menorValor = Math.min(arr)
    //soma dos valores
    for (let index = 0; index < arr.length; index++) {
        var soma =+ arr[index]
    }
    //media dos valoresR
    var media = soma / tamanho

    var resultados = `Temos ${tamanho} numeros <br>
    Maior valor: ${maiorValor} <br>
    Menor valor: ${menorValor} <br>
    Somando tudo temos: ${soma} <br>
    A media é de: ${media}`

    
    resultContainer.innerHTML = resultados;
   
}