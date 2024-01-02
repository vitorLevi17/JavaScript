function mostrarTabuada() {
    var numeroTab = parseInt(document.getElementById('numeroS').value)
    var selTab = document.getElementById('selTab')

    // Limpa as opções anteriores
    selTab.innerHTML = "";

    for (let index = 1; index <= 10; index++) {
        let item = document.createElement('option');

        valor = numeroTab * index;
        item.text = `${numeroTab} X ${index} = ${valor}`
        item.value = `tab${index}`
        selTab.appendChild(item);
    }
}
