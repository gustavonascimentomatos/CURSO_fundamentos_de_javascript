// Valor falso => false, 0, [], "", '', null, undefined, NaN
// Valor verdadeiro => true, 1, -1, 0.5, "0"

const podeDirigir = true;
const saldoEmConta = 0;
const boolComString = 'ae hackerzão!!'

if (podeDirigir) {
    console.log('Pode dirigir!');
} else {
    console.log('Não pode dirigir!');
}

if (!saldoEmConta) {
    console.log('Não tem saldo!');
}

console.log(!!boolComString); // Força o valor para boolean sendo true ou false de acordo com a tabela
console.log(!boolComString);// Nnegação

// Negação + forçar a bool
console.log(!(!!boolComString));