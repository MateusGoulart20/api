/*
Criar um programa que rode no terminal em JavaScript para gerenciamento
de tarefas, utilizando a arquitetura MVC e que tenha os seguintes
requisitos: tenha um menu onde o usuário pode escolher (criar tarefa, listar
tarefas, deletar tarefa e sair do programa), seu programa deve atender
todas essas funcionalidades.
*/
const TarefaController = require('./controllers/tarefa-controller');

// Executando:
const tarefaController = new TarefaController();
// Criando tarefas
const tarefas = [`Estudar`, `Programar`, `Ler`, `Exercitar`];
for (const tarefa of tarefas) tarefaController.criarTarefa(tarefa);

// Listar tarefas
//tarefaController.listarTarefas();


tarefaController.menu();