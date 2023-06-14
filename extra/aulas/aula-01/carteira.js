const valorInvestido = 5000.00;
const taxaMensal = 0.008; // 0.8% expresso como decimal
let valorTotal = valorInvestido
for (let i = 6; i <= 12; i++) {
let rendimentoMensal = valorTotal * taxaMensal;
valorTotal += rendimentoMensal;
}
// Imprimindo o resultado
console.log("Valor total no final do ano será de R$:");
console.log(valorTotal.toFixed(2))