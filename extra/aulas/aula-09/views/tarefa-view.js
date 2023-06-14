module.exports = class Tarefa_view {
    static render(tarefa) {
        console.log(`ID: ${tarefa.id} - Descrição: ${tarefa.descricao}`);
    }
    static menu(){
        console.log(' O que deseja fazer?') //  listar         tarefas, deletar tarefa e sair do programa
        console.log('1 - Criar uma tarefa')
        console.log('2 - Listar uma tarefa')
        console.log('3 - Deletar uma tarefa')
        console.log('4 - Sair do Programa ')
    }
    static menuAdicionar(){
        console.log(' Insira o nome da tarefa que deseja entrar! ')
    }
    static menuDeletar(){
        console.log(' Insira o nome da tarefa que deseja deletar! ')
    }
}