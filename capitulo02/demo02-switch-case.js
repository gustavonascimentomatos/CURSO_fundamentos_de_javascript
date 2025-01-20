const readLine = require('readline');
const terminal = readLine.createInterface({
    // Definir o modo de entrada via terminal
    input: process.stdin,

    // Todo texto de saída sairá no terminal
    output: process.stdout
})

// Texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de media
Digite [1] para acessar o menu inicial
Digite [2] para acessar o menu de Herois
Digite [3] para acessar o menu de Guerreiras
Digite [0] para sair
`

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial,
    },
    opcao1: {
        texto: 'SubMenu! Pressione enter para selecionar mais opções...',
        fn: opcao1
    }
}

function opcao1(msg) {
    console.log('Não há mais opções!');
    terminal.close();
}

function menuInicial(msg) {
    const opcao = Number(msg);
    if (isNaN(opcao)) {
        throw new Error('Não é um número', msg)
    }

    switch (opcao) {
        case 0:
            console.log('Saindo...')
            terminal.close()
            break;
        case 1:
            console.log('Menu Inicial...')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        case 2:
            console.log('Menu De Herois...')
            break;
        case 2:
            console.log('Menu De Guerreiras...')
            break;
        default:
            console.log('Opção Inválida!')
            terminal.close()
            break;
    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)
