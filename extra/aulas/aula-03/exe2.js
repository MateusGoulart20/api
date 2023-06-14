/*
2) Crie um programa em JavaScript que receba dois valores númericos pelo terminal, depois, 
   usando os operadores aritméticos, mostre os seguintes resultados resultados:
   adição, subtração, multiplicação, divisão, resto da divisão e exponenciação.
*/
const prompt = require('prompt-sync')({ sigint: true });
let v1 = Number(prompt('Digite o 1° número: '));
let v2 = Number(prompt('Digite o 2° número: '));

console.log("\tSoma: "+(v1+v2))
console.log("\tSubtração: "+(v1-v2))
console.log("\tMultiplicação: "+(v1*v2))
console.log("\tDivisão: "+(v1/v2))
console.log("\tResto da divisão: "+(v1%v2))
console.log("\tExponenciação: "+(v1**v2))

