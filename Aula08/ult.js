var array = []       

function verificar(number){
    if (array.includes(number) || number >100) {
        window.alert(`O valor ${number} é invalido, favor selecionar outro numero`)
        return true    
    }
    
}


function adicionarValores(){
    var valor = parseInt(document.getElementById('numeros').value)
    var sele = document.getElementById('selTab')
    var item = document.createElement('option')

        if(verificar(valor) == true){
            //verificar(valor)
        }else{
        
            item.text = `O valor ${valor} foi adicionado`
                array.push(valor)
                  sele.appendChild(item)
                    console.log(array[0])
        }
}



function finalizar() {

    // tamanho do vetor
    var tamanho = array.length
    
        // maior valor 
        var maiorValor = Math.max(...array)
        
            // menor valor
            var menorValor = Math.min(...array)
            
                //soma dos valores
                var soma = array.reduce(function (acumulador, valor) {
                    return acumulador + valor;
                }, 0);
            
                    //media dos valoresR
                    var media = soma / tamanho

                        var resultados = `Temos ${tamanho} numeros <br>
                        Maior valor: ${maiorValor} <br>
                        Menor valor: ${menorValor} <br>
                        Somando tudo temos: ${soma} <br>
                        A media é de: ${media}`

                            var resultContainer = document.getElementById('Resultado')
                            resultContainer.innerHTML = resultados;
   
}