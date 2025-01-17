// Meses começam do zero

const dataAniversario = new Date(2020, 0, 20);
console.log(dataAniversario);

// Primeira data do JS
const primeiraDataDoJS = new Date(0);
console.log(primeiraDataDoJS);
console.log(primeiraDataDoJS.getTime());

// Data atual
const hoje = new Date();
console.log(hoje.toString());
console.log(hoje.toLocaleDateString());

// Formato global recomendado!
console.log(hoje.toISOString());

const dia = hoje.getDate()
hoje.setDate(dia + 5) // + 5 dias depois de hoje
hoje.setHours(10, 30, 0) // 1° Hora, 2° Minutos, 3° Milisegundos
console.log(hoje);

console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minuto: ${hoje.getMinutes()}
    Segundos: ${hoje.getSeconds()}
`);

// Comparar datas
console.log(new Date(2020, 1, 20) > new Date(2024, 0, 16));
