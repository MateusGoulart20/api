/*
Contexto: Você está desenvolvendo um sistema de registro de alunos para uma escola.
O sistema deve permitir a criação de perfis individuais para cada aluno,
incluindo informações como nome, idade, curso, data de nascimento, notas e média final.			

Descrição do problema: Você precisa desenvolver uma função que permita o registro de informações de um aluno no sistema.
A função deve solicitar ao usuário que insira os seguintes dados:		 						
- Nome do aluno	
- Idade do aluno			
- Curso				
- Data de Nascimento			
- Notas do aluno em 4 disciplinas diferentes (por exemplo, Matemática, Ciências, História e Geografia) 	
				
Com base nas notas fornecidas, o programa deve calcular a média final do aluno e exibir todas as informações registradas na tela.
 Requisitos do problema:			
O programa deve solicitar ao usuário que insira o nome do aluno.		
O programa deve solicitar ao usuário que insira a idade do aluno.
O programa deve solicitar ao usuário que insira as três notas do aluno.
O programa deve calcular a média final do aluno com base nas notas fornecidas.
O programa deve exibir todas as informações registradas, incluindo nome, idade, notas individuais e média final.
*/

let estudante = {
    nome: '',
    idade: 0,
    curso: '',
    nascimento: '',
    notas: {
        math: 0,
        cien: 0,
        hist: 0,
        geog: 0
    },
    media: function ()
    {
        m = 0;
        Object.values(this.notas).forEach(element => m += element);
        return ( m/Object.values(this.notas).length)
    }
}
const prompt = require('prompt-sync')({ sigint: true });
var menu = 1;
while(menu != 0){
    switch (menu) {
        case 1:
            inter = prompt('Qual teu nome? ');
            if(!Number.isInteger(inter)){
                estudante.nome = inter;
                menu++;
            }
            break;
        case 2:
            inter = Number(prompt('Qual tua idade? '));
            if(Number.isInteger(inter)){
                estudante.idade = inter;
                menu++;
            }
            break;
        case 3:
            inter = prompt('Qual teu curso? ');
            if(!Number.isInteger(inter)){
                estudante.curso = inter;
                menu++;
            }
            break;
        case 4:
            inter = prompt('Qual tua data de nascimento? ');
            if(!Number.isInteger(inter)){
                estudante.nascimento = inter;
                menu++;
            }
            break;
        case 5:
            inter =Number(prompt('Qual tua nota de matemática? '));
            if(Number.isInteger(inter)){
                estudante.notas.math = inter;
                menu++;
            }
            break;
        case 6:
            inter = Number(prompt('Qual tua nota de ciências? '));
            if(Number.isInteger(inter)){
                estudante.notas.cien = inter;
                menu++;
            }
            break; 
        case 7:
            inter = Number(prompt('Qual tua nota de história? '));
            if(Number.isInteger(inter)){
                estudante.notas.hist = inter;
                menu++;
            }
            break; 
        case 8:
            inter = Number(prompt('Qual tua nota de geografia? '));
            if(Number.isInteger(inter)){
                estudante.notas.geog = inter;
                menu++;
            }
            break;
        case 9:
            menu = 0;
            break;
    }
}
console.log("Meu nome é "+estudante.nome);
console.log("Tenho "+estudante.idade+" nascido em "+estudante.nascimento);
console.log("Curso "+estudante.curso);
console.log("Minhas notas são:");
console.log("\tMatemática:"+estudante.notas.math);
console.log("\tCiencia:"+estudante.notas.cien);
console.log("\tHistória:"+estudante.notas.hist);
console.log("\tGeografia:"+estudante.notas.geog);
console.log("\tCom média:"+estudante.media());
