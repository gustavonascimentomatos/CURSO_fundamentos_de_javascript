window.onload = () => {
    console.log('Tela carregou!!!')
    const btn = document.getElementById('btnCalcular');

    function obterValorInput(id) {
        const item = document.getElementById(id)
        return parseInt(item.value);
    }

    function click() {
        const tipoOperacao = document.getElementById('tipoOperacao').value;
        const valor1 = parseInt(document.getElementById('valor1').value);
        const valor2 = parseInt(document.getElementById('valor2').value);
        const resultado = Matematica[tipoOperacao](valor1, valor2);

        document.getElementById('resultado')
            .innerText = `A operação de ${tipoOperacao}, ${valor1} por ${valor2} é = ${resultado}`
    }

    btn.onclick = click
}
