// undefined => Não foi definida, nunca recebeu um valor, não existe no contexto
// null => Foi definica, mas não foi inicializada

let varialvelSemInicializacao
let varialvelComInicializacao = "Hello world!"
let varialvelNull = null

console.log(`${varialvelSemInicializacao} ->  Tipo: ${typeof(varialvelSemInicializacao)}`);
console.log(`${varialvelComInicializacao} ->  Tipo: ${typeof(varialvelComInicializacao)}`);
console.log(`${varialvelNull} ->  Tipo: ${typeof(varialvelNull)}`);
