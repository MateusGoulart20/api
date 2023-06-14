/*
Vamor criar um novo Modelo chamado aluno com as seguintes informações:
Id, Nome, Sexo, Data de Nascimento, Curso, 
Cursa Ensino Superior?, Estagiando?
Use o readline-async e demais estruturas para possibilitar:
Incluir, Alterar (a pesquisar) Excluir (a pesquisar) Listar Todos Pesquisar pelo nome
Crie uma opção de sair para encerrar. 
*/

const { Sequelize } = require('sequelize');
const database = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');
const AlunoController = require('./controllers/aluno-controller');
const alunoController = new AlunoController();

alunoController.menu();
/*
database.query(`CREATE TABLE public.aluno (
    id integer NOT NULL PRIMARY KEY,
    nome text NOT NULL,
    sexo text NOT NULL,
    curso text NOT NULL,
    grau text NOT NULL,
    estagio integer NOT NULL);`)
	.then(console.log('Tabela Criada'))
	.catch(console.error);
*/



