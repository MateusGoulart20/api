// 8) Faça o mesmo exercício número "6", porém utilizando o loop "while"

const prompt = require('prompt-sync')({ sigint: true });
let entrada = Number(prompt('Digite um numero: '));
let i = 1
while(i<=10){
    console.log(i*Number(entrada))
    i++
}
