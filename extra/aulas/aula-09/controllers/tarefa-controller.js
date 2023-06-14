const TarefaModel = require('../models/tarefa-model');
const TarefaView = require('../views/tarefa-view');

// Controller
const prompt = require('prompt-sync')({ sigint: true });
let trans;
module.exports = class TarefaController {
    constructor() {
        this.tarefas = [];
        this.idAtual = 1;
    }
    criarTarefa(descricao) {
        const tarefa = new TarefaModel(this.idAtual, descricao);
        this.idAtual++;
        this.tarefas.push(tarefa);
        return tarefa;
    }
    listarTarefas() {
        this.tarefas.forEach(tarefa => TarefaView.render(tarefa));
    }
    menu(){
        while (true){
            TarefaView.menu();
            trans = Number(prompt());
            if (Number.isInteger(trans)){
                switch (trans){
                    case 1:
                    this.casdastrarTarefa();   
                    break;
                    case 2:
                    this.listarTarefas();
                    break;
                    case 3:
                    this.deletarTarefa();
                    break;
                    case 4: return;
                }
            }
        }
    }
    casdastrarTarefa(){
        TarefaView.menuAdicionar();
        this.criarTarefa(prompt());
    }
    deletarTarefa(){
        TarefaView.menuDeletar();
        trans = prompt();
        // console.log(this.buscaPalavra(trans))
        const tarefaEncontrada = this.buscaPalavra(trans)
        if (tarefaEncontrada != undefined)
            this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== tarefaEncontrada.id);
            //this.tarefas = this.tarefas.filter(function (tarefa) { return tarefa.id !== tarefaEncontrada.id})
            // this.tarefas.slice( this.buscaPalavra(trans) , 1);
    }
    buscaPalavra(entrada){
        return this.tarefas.find( (tarefa) => tarefa.descricao == entrada) ;
    }
    //const sameWord = (element) => element > 13;
}