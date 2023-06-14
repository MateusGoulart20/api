require('./database');

// npm install prompt-sync
const prompt = require('prompt-sync')({ sigint: true });
const { UserController } = require('./controller/user-controller');

const userController = new UserController();

const userName = prompt('Digite um nome: ');


(async () => {
    await userController.createUser(userName);
})();

//userController.createUser('Kleber')


/*
const { AlunoController } = require('./src/controllers/aluno-controller');

// Usuario:
const alunoController = new AlunoController();

(async () => {
    try {
        await alunoController.cadastrarAluno(
            'Aluno nome',
            'M',
            new Date('2000-12-10'),
            'Informatica',
            true,
            false
        );
    } catch (error) {
        console.log(error);
    }
})();
*/
/*
const prompt = require('prompt-sync')({ sigint: true });

const TarefaController = require('./controllers/tarefa-controller');

// Usuário
const tarefaController = new TarefaController();

tarefaController.cadastrarTarefa(prompt('Digite o nome da tarefa: '));
tarefaController.listarTarefas();
*/