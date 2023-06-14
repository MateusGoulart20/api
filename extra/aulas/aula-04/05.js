/*
 5) Crie um programa em JavaScript que cadastre o nome de uma tarefa pelo terminal,
    e quando o usuário decidir sair do programa mostre todas as tarefas cadastradas.
*/
let lista = []
const prompt = require('prompt-sync')({ sigint: true });
let inter 
while (true){
    inter = prompt('Digite Tarefa: ');

    if(inter == 'exit') {
        break;
    }else{
        lista.push(inter)
    }
}
console.log(lista)