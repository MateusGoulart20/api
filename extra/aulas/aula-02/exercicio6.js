/* as
 6) Utilizando a estrutura "for", crie um programa que receba um número
 e mostre a tabuada de multiplicação desse número de 1 à 10.
 
 Exemplo: número: 4
    4 x 1 = 4
    4 x 2 = 8
    4 x 3 = 12
    4 x 4 = 16
    4 x 5 = 20
    4 x 6 = 24
    4 x 7 = 28
    4 x 8 = 32
    4 x 9 = 36
    4 x 10 = 40
*/
const prompt = require('prompt-sync')({ sigint: true });
let entrada = Number(prompt('Digite um numero: '));
for(let i = 1; i<=10; i++){
    console.log(i*Number(entrada))
}