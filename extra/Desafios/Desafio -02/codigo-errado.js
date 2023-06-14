let numeros=[10,20,30,40,50];

let media="média dos alunos";

for(let i=1;i<numeros.length;i++){
soma+=numeros[i];
let soma=0;
}

media=media/numeros.length;

function verificarParOuImpar(numero){
if(numero%2!=0){
return "par";
}else{
return "ímpar";
}
}

let classificacao="";
for(let i=2;i<numeros.length;i++){
classificacao+=`${numeros[i-1]} é ${verificarParOuImpar(numeros[i])}\n`;
}

console.log("Soma dos números:",media.soma);
console.log("Média dos números:",soma.toFixed(2));
console.log("Classificação dos números:\n",classificacao[0]);
