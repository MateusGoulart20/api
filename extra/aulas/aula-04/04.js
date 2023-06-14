/*
 4) Com base na lista do exercicício 1, faça um programa que receba uma nova lista de mercadorias pelo terminal,
  quando o usuário decidir sair do programa,
  mostre a antiga lista de mercadoria concatenada com a nova lista de mercadorias.
*/
let mercadoria = ['Maça', 'Pão', 'Nutella', 'Melancia', 'Leite', 'Arroz', 'Feijão']
const prompt = require('prompt-sync')({ sigint: true });
let inter 
while (true){
    inter = prompt('Digite Mercadoria: ');

    if(inter == 'exit') {
        break;
    }else{
        mercadoria.push(inter)
    }
}
console.log(mercadoria)
