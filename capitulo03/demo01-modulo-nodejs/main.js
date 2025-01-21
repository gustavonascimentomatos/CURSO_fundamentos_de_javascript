const Matematica = require('./matematica');
const readLine = require('readline');

//console.log(Matematica.somar(1, 4));

const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminal.question('Insira o primeiro valor: ', input1 => {
    terminal.question('Insira o segundo valor: ', input2 => {
        terminal.question('Escolha a operação\n[1] - Somar\n[2] - Multiplicar\nOpção: ', operacao => {
            terminal.close();

            const valor1 = parseFloat(input1);
            const valor2 = parseFloat(input2);

            switch (operacao) {
                case '1':
                    console.log(`${valor1} + ${valor2} = ${Matematica.somar(valor1, valor2)}`)
                    break;
                case '2':
                    console.log(`${valor1} * ${valor2} = ${Matematica.multiplicar(valor1, valor2)}`)
                    break;
                default:
                    console.log('Opção invalida!')
                    break;
            }
        })
    })
});
