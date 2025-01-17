function nomeDaFuncao(parametro) {
    /**
     * Bloco de código
     */
}

function queDiaEhoje() {
    const data = new Date();
    console.log(`Hoje é dia: ${data.getDate()}`);
}

function soma(valor1, valor2) {
    console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`)
}

queDiaEhoje();
soma(10, 20);
soma(3, 4);

// Funções podem retornar valores
function soma(valor1, valor2) {
    return valor1 + valor2;
}

const somatorio = soma(5, 5)
console.log(somatorio);

const funcionario1 = {
    nome: 'Zezinho',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: 'Mariazinha',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}

function calcularDesconto(salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(funcionario1.salarioBruto, funcionario1.desconto);
funcionario2.salarioLiquido = calcularDesconto(funcionario2.salarioBruto, funcionario2.desconto);

console.log(`Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}`);
console.log(`Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}`);
