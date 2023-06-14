/*
 2) Crie um programa que tenha um número qualquer, atribui um valor númerico,
 faça uma verificação, se esse número for menor que zero mostre "Negativo",
  se for maior que zero mostre "Positivo", se for igual à zero mostre "Zero"
*/

const qualquer = 56
const prompt = require('prompt-sync')({ sigint: true });
const numerico = Number(prompt('Digite um número: '));
let verificação = numerico - qualquer
if(verificação<0){
    console.log("Negativo")
} else if( verificação>0){
    console.log("Positivo")
} else{
    console.log("Zero")
}