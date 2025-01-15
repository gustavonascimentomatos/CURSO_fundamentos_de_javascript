let salarioDoAmigo = 1000;
let meuSalario = '2999';

let meuSalarioCorrigio = Number(meuSalario)

console.log(`Tipo da variável salarioDoAmigo: ${typeof(salarioDoAmigo)}`);
console.log(`Tipo da variável meuSalario: ${typeof(meuSalario)}`);
console.log(`Tipo da variável meuSalarioCorrigio: ${typeof(meuSalarioCorrigio)}`);
console.log(`Soma salarioDoAmigo + meuSalario: ${salarioDoAmigo + meuSalario}`);
console.log(`isNAN meuSalario: ${isNaN(meuSalario)}`);
console.log(`Soma salarioDoAmigo + meuSalarioCorrigio: ${salarioDoAmigo + meuSalarioCorrigio}`);

let minhaString = 'Olá mundo!';
let minhaOutraString = 'Olá mundo 2!';
let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString}. AE!`;

console.log(minhaStringComVariaveis);