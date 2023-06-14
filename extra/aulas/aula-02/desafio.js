/*
Você recebeu um código JavaScript para calcular a soma,
 a média dos números presentes em um array
 e exibir a classificação de cada número como par ou ímpar.
No entanto, o código está desorganizado, com problemas de indentação e falta de comentários.
Sua tarefa é organizar o código corretamente, corrigir a indentação,
adicionar comentários relevantes em cada seção do código e identificar os escopos das variáveis utilizadas. 
Ah, e não se esqueça. O código tem de fazer o que foi pedido.
*/

// array
let numeros = [10, 20, 30, 40, 50];
// percorrendo array
let soma = 0
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
// media array
let media = soma / numeros.length;

function verificarParOuImpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

let classificacao = "";
for (let i = 0; i < numeros.length; i++) {
    classificacao += `${numeros[i]} é ${verificarParOuImpar(numeros[i])}\n`;
}

console.log("Soma dos números:", soma);
console.log("Média dos números:", media);
console.log("Classificação dos números:\n", classificacao);