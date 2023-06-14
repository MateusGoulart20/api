//  7) Faça o mesmo exercício número "5", porém utilizando o loop "while"
const prompt = require('prompt-sync')({ sigint: true });
let soma = 0
let inicio = Number(prompt('Inicio: '));
let fim = Number(prompt('Fim: '));
if(inicio%2 == 0){
    inicio
}else{
    inicio++
}
let i = inicio
while(i<=fim){
    soma+=i
    i+=2
}
console.log(soma)