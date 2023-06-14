/*
 3) Utilizando a estrutura "switch", crie um programa que tenha uma variável chamada "nomeMes",
 ela deve receber o nome de um mês,
 seu programa deve verificar o nome do mês e mostrar o número correspondente a esse mês.
 Exemplo: "Fevereiro é o mês: 2". Lembre-se de fazer o tratamento caso o nome do mês seja inválido.
*/
const prompt = require('prompt-sync')({ sigint: true });
const nomeMes = String(prompt('Digite um mês: '));
switch (nomeMes) {
    case "Janeiro":
        console.log("Janeiro é o mês: 1")
        break;
    case "Fevereiro":
        console.log("Fevereiro é o mês: 2")
        break;
    case "Março":
        console.log("Março é o mês: 3")
        break;
    case "Abril":
        console.log("Abril é o mês: 4")
        break;
    case "Maio":
        console.log("Maio é o mês: 5")
        break;
    case "Junho":
        console.log("Junho é o mês: 6")
        break;
    case "Julho":
        console.log("Julho é o mês: 7")
        break;
    case "Agosto":
        console.log("Agosto é o mês: 8")
        break;
    case "Setembro":
        console.log("Setembro é o mês: 9")
        break;
    case "Outubro":
        console.log("Outubro é o mês: 10")
        break;
    case "Novembro":
        console.log("Novembro é o mês: 11")
        break;
    case "Dezembro":
        console.log("Dezembro é o mês: 12")
        break;
    default:
        console.log("q?")
        break;
}