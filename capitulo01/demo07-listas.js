const minhaLista = [];
const minhaListaDeTarefas = [
    'mandar e-mail',
    'colocar comida para o dog',
    'limpar o quarto'
];

console.log(minhaListaDeTarefas[0]);
console.log(minhaListaDeTarefas[1]);
console.log(minhaListaDeTarefas[4]);

// Quantidade de intesn no array
console.log(minhaListaDeTarefas.length);

// Adicionar item
minhaListaDeTarefas.push('formatar computador');
console.log(minhaListaDeTarefas);

// Remover ultimo item da lista
const ultimo = minhaListaDeTarefas.pop();
console.log(ultimo);

// Remover o primeiro item da lista
const primeiro = minhaListaDeTarefas.shift();
console.log(primeiro);

// Remover um item especifico a partir de um indice
console.log(minhaListaDeTarefas[2]);
minhaListaDeTarefas.splice(2, 1) // 1° Parametro onde iniciar, 2° Quantidade removida
console.log(minhaListaDeTarefas);

const itensVariados = [
    1, 'computador', 0.22
]

// Verificar o tipo do array
console.log(typeof(itensVariados));

// Verificar o tipo do array de forma correta
console.log(Array.isArray(itensVariados));

const numeros = [3, 2, 1, 0];

// Ordenar 
console.log(numeros.sort());

// Juntar dois Arrays
const novoArray = itensVariados.concat([1, 2, 3]);
console.log(novoArray)

// Juntar arrays em uma string
console.log(itensVariados.join(', '));

// Verificar o indice do item
const index = itensVariados.indexOf('computador');
console.log(index);
