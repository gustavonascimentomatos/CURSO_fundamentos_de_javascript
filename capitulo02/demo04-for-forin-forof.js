const textoPar = "Par"
const textoImpar = "Impar"

for (let index = 0; index <= 10; index++) {
    const decisao = index % 2 === 0 ? textoPar : textoImpar;

    console.log(`O número: ${index} é ${decisao}`);
}

const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        superPoder: 'Velocidade'
    },
    {
        id: parseInt(Math.random() * 10),
        nome: 'Mariazinha',
        superPoder: 'Força'
    }
]

for (let index = 0; index < minhaListaDeTarefas.length; index++) {
   const item = minhaListaDeTarefas[index]

   console.log(`id: ${item.id} - nome: ${item.nome} - poder: ${item.superPoder}`);    
}

// FORIN, não precisa de contador
for (const key in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas[key];

    console.log('nome:', item.nome);
}

// FOROF, não precisa usar o index
for (const element of minhaListaDeTarefas) {
    console.log('Super Poder:', element.superPoder);
}
