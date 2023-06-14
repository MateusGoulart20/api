/*
5) Crie um programa em JavaScript que receba um número pelo terminal e calcule o fatorial desse número:
   fatorial de 5 = 5! = 5 * 4 * 3 * 2 * 1 = 120
   OBS: fatorial de 0 e 1 é igual à 1
*/
const prompt = require('prompt-sync')({ sigint: true });
let v1 = Number(prompt('Digite o número: '));
var x = 1
for(let i = 1; i<= v1; i++){
    x *= i
}
console.log(x)