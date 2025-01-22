const readLine = require('readline');
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questaoAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}`, resolve);
    })
};

let nome = ""
let telefone = ""

Promise.resolve()
    .then(() => questaoAsync('Qual é o seu nome: '))
    .then(respostaNome => {
        if (!respostaNome) {
            throw new Error('Campo vazio!');
        } 
        nome = respostaNome
    })
    .then(() => questaoAsync('Qual é o seu telefone: '))
    .then(respostaTelefone => {
        if (!respostaTelefone) {
            throw new Error('Campo vazio!');
        } 
        telefone = respostaTelefone
    })
    .then(() => { console.log(`Nome: ${nome} - Telefone: ${telefone}`) })
    .catch(error => {console.log('[ERRO]', error)})
    .finally(() => { terminal.close() })
