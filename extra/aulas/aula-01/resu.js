const numero = prompt("Digite um número inteiro positivo:");
let soma = 0;
const digitos = numero.toString(); // Converte o número para uma string
for (let i = 0; i < digitos.length; i++) {
soma += parseInt(digitos[i]);}
console.log("A soma dos dígitos é:", soma);