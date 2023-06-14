/*
 9) DESAFIO: Crie um jogo de terminal, onde o computador gere um número aleatório de 1 à 100,
 o jogador deve acertar o número sorteado no menor número de tentativas possível.
 Seu jogo deve dar dicas para o jogador, como por exemplo: é maior, é menor, até o jogador.
 Quando o jogador acertar o número imprima "Parabéns, seu número de tentativas foi: X"
 Dicas:
 Utilize uma dependência para capturar eventos no terminal chamada "prompt-sync", para isso,
 rode na pasta do projeto o comando:
    npm install prompt-sync
    Importe no código utilizando:
    const prompt = require('prompt-sync')({ sigint: true });
    Para utilizar:
    const numero = Number(prompt('Digite um número: '));
 Para gerar um número aleatório utiliza o método "random" da classe "Math" do JavaScript.
*/
let random = Math.random()
console.log(random)
random *=100
random = Math.trunc(random) 
console.log(random)
let tentativas = 1
while (true){
    const prompt = require('prompt-sync')({ sigint: true });
    const numero = Number(prompt('Digite um número: '));
    if(numero>random)console.log("É menor")
    if(numero<random)console.log("É maior")
    if(numero==random)break
    tentativas++
}
console.log("Parabéns Tentativas: "+tentativas)
/*




console.log(numero)*/