/*
 5) Utilizando a estrutura "for", crie um programa que some todos os números pares de um intervalo e mostre o resultado.
 Exemplo: 1 à 10 a soma dos números pares é 30: 2 + 4 + 6 + 8 + 10.
 Dica: Se o número é divisível por 2, ou seja, tenha resto zero ele é par (x % 2 == 0)
 */
const prompt = require('prompt-sync')({ sigint: true });
let soma = 0
let inicio = Number(prompt('Inicio: '));
let fim = Number(prompt('Fim: '));
if(inicio%2 == 0){
    inicio
}else{
    inicio++
}
for (let i = inicio; i<=fim; i+=2){
    soma+=i
}
console.log(soma)