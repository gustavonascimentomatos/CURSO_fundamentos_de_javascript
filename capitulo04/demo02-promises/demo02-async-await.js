const readLine = require('readline');
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questaoAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}`, msg => {
            !!msg ? resolve(msg) : reject(new Error('Campo não pode ser vazio!'))
        })
    })
};

async function main() {
    try {
        const nome = await questaoAsync('Qual é o seu nome: ')
        const telefone = await questaoAsync('Qual é o seu telefone: ')

        console.log(`Nome: ${nome} - Telefone: ${telefone}`)
    } catch (error) {
        console.log('[ERRO]', error.stack)
    }

    finally {
        terminal.close()
    }
}

main();
