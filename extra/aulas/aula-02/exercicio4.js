/*
 4) Faça o mesmo exercício número "1", porém utilizando o operador ternário
*/

const prompt = require('prompt-sync')({ sigint: true });
let idade = Number(prompt('Digite sua idade: '));
let m18 = idade >= 18
if(m18){
    console.log("Você é maior de idade.")
}else{
    console.log("Você é menor de idade.")
}