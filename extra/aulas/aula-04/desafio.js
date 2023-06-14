/*
    Desenvolva um programa que determine a elegibilidade de uma pessoa para receber uma vacina.
    Os critérios de elegibilidade são os seguintes:
        Idade: Idade igual ou superior a 18 anos.
        Além da idade, pessoas com as seguintes condições médicas também são elegíveis:
        Diabetes.
        Hipertensão.
        Doenças cardíacas.
    Solicite ao usuário a idade e as condições médicas (diabetes, hipertensão,
    doenças cardíacas). Com base nessas informações, verifique se a pessoa é
    elegível para a vacinação, exibindo uma mensagem indicando se a pessoa é
    elegível ou não para a vacinação. Certifique-se de lidar adequadamente
    com diferentes cenários de entrada, como valores inválidos para idade ou
    condições médicas.
*/

let a = false
const prompt = require('prompt-sync')({ sigint: true });
let inter 
while (true){
    inter = Number(prompt('Quantos anos: '));
    if(Number.isInteger(inter)) {
        if(inter >= 18) a = true
        break;
    }
}while (true){
    inter = prompt('Tem Diabetes?(sim/nao) ');
    if(inter == 'nao') {
        break;
    }
    if(inter == 'sim'){
        a = true
        break;
    }
}while (true){
    inter = prompt('Tem Hipertensão?(sim/nao) ');
    if(inter == 'nao') {
        break;
    }
    if(inter == 'sim'){
        a = true
        break;
    }
}while (true){
    inter = prompt('Tem Doenças cardíacas?(sim/nao) ');
    if(inter == 'nao') {
        break;
    }
    if(inter == 'sim'){
        a = true
        break;
    }
}

if(a){
    console.log('pode')
}else{
    console.log('nao pode')
}