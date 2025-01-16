const heroi = {
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'
}

console.log('nome:', heroi.nome);
console.log('idade:', heroi['idade']);
console.log('sexo:', heroi.sexo);
console.log('Não existe:', heroi.naoExiste);

heroi.id = 1;

console.log(heroi);

// Encontrar as chaves do objeto
const chaves = Object.keys(heroi);
console.log(chaves);

// Encontrar os valores do objeto
const valores = Object.values(heroi);
console.log(valores);

// Juntar dois objetos
const pessoa = {
    tamanho: '10 metros'
}

const novoObjeto = Object.assign(heroi, pessoa);
console.log(novoObjeto);
