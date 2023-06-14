module.exports = class Aluno_view {
    static render(tarefa) {
        console.log(`ID: ${tarefa.id} - Descrição: ${tarefa.descricao}`);
    }
    static menu(){ // Incluir, Alterar (a pesquisar) Excluir (a pesquisar) Listar Todos Pesquisar pelo nome
        console.log(' O que deseja fazer?')
        console.log('1 - Incluir aluno')
        console.log('2 - Alterar aluno')
        console.log('3 - Deletar aluno')
        console.log('4 - Listar aluno')
        console.log('5 - Sair do Programa ')
    }
    static menuAdicionar(){
        console.log(' Insira o nome da tarefa que deseja entrar! ')
    }
    static menuDeletar(){
        console.log(' Insira o nome da tarefa que deseja deletar! ')
    }
    static nome(){
        console.log(' Qual o nome? ')
    }
    static sexo(){
        console.log(' Qual o sexo? ')
    }
    static curso(){
        console.log(' Qual o curso?')
    }
    static grau(){
        console.log(' Qual o grau? ')
    }
    static estagio(){
        console.log(' Grau o estagio')
    }
}