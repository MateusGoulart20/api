/*
 Crie um programa em JavaScript que receba dois números pelo console.
Retorne as seguintes informações: soma, subtração, multiplicação, qual
número é maior e se os dois números são diferentes entre si.
*/
const prompt = require('prompt-sync')({ sigint: true });
let v1 = Number(prompt('Digite o 1° número: '));
let v2 = Number(prompt('Digite o 2° número: '));

console.log("\tSoma: "+(v1+v2))
console.log("\tSubtração: "+(v1-v2))
console.log("\tMultiplicação: "+(v1*v2))
if(v1==v2){
    console.log("\tNúmeros Iguais.")
} else {
    console.log("\tNúmeros Diferentes.")
    console.log(v1>v2? "\tPrimeiro numero é maior" : "\tSegundo numero é maior")
}
