/*
6) Crie um programa em JavaScript que receba o peso (kg) e altura (m) de uma pessoa pelo terminal, calcule o IMC:
   IMC = peso / altura^2
   Depois faça as seguintes comparações: 
   IMC menor que 18.5 mostre "Abaixo do peso"
   IMC maior ou igual à 18.5 e menor que 25 mostre "Normal"
   IMC maior ou igual à 25 e menor que 30 mostre "Sobrepeso"
   IMC maior ou igual à 30 mostre "Obesidade"
*/

const prompt = require('prompt-sync')({ sigint: true });
let p = Number(prompt('Digite o peso (kg): '));
let a = Number(prompt('Digite o altura (m): '));
let imc = p / a**2
console.log("p"+p+" a"+a+" "+imc)
if (imc<18.5){
    console.log("Abaixo do peso")
} else if (imc<25) {
    console.log("Normal")
} else if (imc<30) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}
