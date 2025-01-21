// Enquanto não mudar, não para!

let termoDeParada = true;
let contador = 0;

while (termoDeParada) {
    termoDeParada = contador < 10;

    if (contador % 2 === 0) {
        console.log('Número par:', contador);
    }
    
    contador += 1;
}

// Roda a primeira vez e testa a variavel depois!
do {
    console.log('Só uma vez!', termoDeParada)
} while (termoDeParada);

while (termoDeParada) {
    // Não vai executar
    console.log('Não vai executar!')
}
