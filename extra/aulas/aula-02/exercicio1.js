/*
 1) Crie um programa que tenha uma constante chamada idade,
 atribui um valor númerico a essa constante, depois faça uma verificação,
 se essa idade for maior ou igual à 18 mostre "Você é maior de idade.", 
 se não, mostre "Você é menor de idade.". 
*/
const prompt = require('prompt-sync')({ sigint: true });
let idade = Number(prompt('Digite sua idade: '));
let m18 = idade >= 18
if(m18){
    console.log("Você é maior de idade.")
}else{
    console.log("Você é menor de idade.")
}
