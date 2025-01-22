const fs = require('fs')

fs.readFile('./arquivo01.txt', (errorArquivo1, respostaArquivo1) => {
    if(errorArquivo1) {
        console.log('[ERRO]', errorArquivo1.stack);
        return;
    }

    fs.readFile('./arquivo02.txt', (errorArquivo2, respostaArquivo2) => {
        if(errorArquivo2) {
            console.log('[ERRO]', errorArquivo2.stack);
            return;
        }

        fs.readFile('./arquivo03.txt', (errorArquivo3, respostaArquivo3) => {
            if(errorArquivo3) {
                console.log('[ERRO]', errorArquivo3.stack);
                return;
            }

            const conteudo = `${respostaArquivo1}\n\n${respostaArquivo2}\n\n${respostaArquivo3}`
            console.log(conteudo);

            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
                if (errorWrite) {
                    console.log('[ERRO]', errorWrite.stack);
                    return;
                }

                console.log('Arquivo salvo com sucesso!!!');
            })
        })
    })
})
