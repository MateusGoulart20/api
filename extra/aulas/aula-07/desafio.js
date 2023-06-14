/*
Desenvolva um programa para registrar a compra de Criptomoedas.
Primeiramente armazene as cotações atuais para as seguintes moedas:
Bitcoin (BTC), Ethereum (ETH) e Litecoin (LTC).
Então, solicite do usuário quanto deseja investir em cada cripto e apresente
a quantidade que será adquirida.

Após a fase acima, solicite do usuário uma expectativa de valorização para
cada moeda acima e recalcule os valores investidos, conforme as
informações já coletadas. Por fim, apresente o valor investido inicialmente
e o valor total com expectativa de valorização.

Um Plus: calcule o % de valorização total (Valor total esperado X Valor
investido inicial).
Obs.: Use funções anônimas e de seta para os cálculos e Promessas para
garantir que a expectativa de valorização seja maior que zero.
*/
const cotacao = {
    BTC: 0.0000075,
    ETH: 0.00011,
    LTC: 0.0022
}
let carteira = {
    BTC: null,
    ETH: null,
    LTC: null
}
let futuro = {
    BTC: null,
    ETH: null,
    LTC: null
}

const prompt = require('prompt-sync')({ sigint: true });
let trans;

try{
    trans = prompt("Quanto deseja investir em Bitcoin (BTC)");
    carteira.BTC = Number(trans)*cotacao.BTC;
    trans = prompt("Quanto deseja investir em Ethereum (ETH)");
    carteira.ETH = Number(trans)*cotacao.ETH;
    trans = prompt("Quanto deseja investir em Litecoin (LTC)");
    carteira.LTC = Number(trans)*cotacao.LTC;
    
    console.log(carteira)
    
    trans = Number(prompt("Quanto Bitcoin (BTC) valorizará"))/100;
    if(trans>0){
        futuro.BTC = carteira.BTC*cotacao.BTC*(++trans)
    }else{
        throw new Error("valorização negativa")
    }
    trans = Number(prompt("Quanto Ethereum (ETH) valorizará"))/100;
    if(trans>0){
        futuro.ETH = valoriza(carteira.ETH*cotacao.ETH*(++trans))
    }else{
        throw new Error("valorização negativa")
    }
    trans = Number(prompt("Quanto Litecoin (LTC) valorizará"))/100;
    if(trans>0){
        futuro.LTC = valoriza(carteira.LTC*cotacao.LTC*(++trans))
    }else{
        throw new Error("valorização negativa")
    }
    
    console.log(futuro)
    
    console.log("BTC: "+futuro.BTC/carteira.BTC)
    console.log("ETH: "+futuro.ETH/carteira.ETH)
    console.log("LTC: "+futuro.LTC/carteira.LTC)
    console.log("Valor total: "+futuro.BTC/carteira.BTC + futuro.ETH/carteira.ETH +futuro.LTC/carteira.LTC)

}catch (error) {
    console.error(error)
}
/*
function valoriza(valor) {
    return new Promise((resolve, reject) => {
        if (typeof valor === 'number') {
            if( valor > 0){
                resolve(trans*valor); 
            }else{
                reject(new Error('O argumento é negativo.'));
            }
        } else {
            reject(new Error('O argumento não é um número.'));
        }
    });
}
multiplicaPorDois(4).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error.message);
});

//import data from './cripto.json' assert { type: 'json' };
//console.log(data)
/*
fetch('C:/Users/Usuario 269/Desktop/Notes/Node/aula-07/cripto.json')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
        console.log("\t\tESTAMOS TENTANTDO")
        console.error(error)
        });
        */
