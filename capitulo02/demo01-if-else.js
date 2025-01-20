let frutasEsistenteNoMercado = false;
let temCPUSuficiente = true;

// Obter valores do terminal
const args = process.argv;
const saldo = args[args.length -1];

if(isNaN(saldo)) {
    console.log('Valor invalido!!');
    return;
}

let tipoCliente = "premium"

if(saldo < 9) {
    tipoCliente = 'basic'
} else if(saldo >= 10 && saldo < 20) {
    tipoCliente = 'gold'
} else {
    tipoCliente = null
}

if(!tipoCliente) {
    tipoCliente = "indefinico"
}

console.log('Tipo do cliente', tipoCliente);

const operadorOu = 1 > 2 || 2 > 1;
const operadorE = 1 === 1 && 2 !== 2;
const operadorNot = !(1 == 1)

console.log(operadorOu);
console.log(operadorE);
console.log(operadorNot);

const idade = 18;
const resultado = idade >= 18 ? "Pode dirigir" : "Não pode dirigir!!"

console.log(resultado);
