const AlunoModel = require('../models/aluno-model');
const AlunoView = require('../views/aluno-view');
const { Sequelize } = require('sequelize');
const database = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');
// Controller

const prompt = require('prompt-sync')({ sigint: true });
let trans;
module.exports = class AlunoController {
constructor(){
    this.idAtual = 1;
}
    incluirAluno() {
        AlunoView.nome();
        const nome = prompt();
        AlunoView.sexo();
        const sexo = prompt();
        AlunoView.curso();
        const curso = prompt();
        AlunoView.grau();
        const grau = prompt();
        AlunoView.estagio();
        const estagio = prompt();
        (async () => {
            try {
                // Criar
                await AlimentoModel.create({
                    id:this.idAtual,
                    nome: nome,
                    sexo: sexo,
                    curso: curso,
                    grau: grau,
                    estagio: estagio
                });
            } catch (error) {
                console.error(error);
            }
        })();
    }
    listarAlunos() {
        (async () => {
            try {
                // Consultar
                const alunos = await AlimentoModel.findAll();
                console.log(alunos);
            } catch (error) {
                console.error(error);
            }
        })();
    }
    menu(){
        while (true){
            AlunoView.menu();
            trans = Number(prompt());
            if (Number.isInteger(trans)){ // Incluir, Alterar (a pesquisar) Excluir (a pesquisar) Listar Todos Pesquisar pelo nome
                switch (trans){
                    case 1:
                    this.incluirAluno();   
                    break;
                    case 2:
                    this.alterarAluno();
                    break;
                    case 3:
                    this.deletarAluno();
                    break;
                    case 4: 
                    this.listarAlunos();
                    break;
                    case 5: return;
                }
            }
        }
    }
    deletarAluno(){
        AlunoView.menuDeletar();
        trans = prompt();
        // console.log(this.buscaPalavra(trans))
        const alunosEncontrada = this.buscaPalavra(trans)
        if (alunosEncontrada != undefined)
            this.alunoss = this.alunoss.filter((alunos) => alunos.id !== alunosEncontrada.id);
            //this.alunoss = this.alunoss.filter(function (alunos) { return alunos.id !== alunosEncontrada.id})
            // this.alunoss.slice( this.buscaPalavra(trans) , 1);
    }
    buscaPalavra(entrada){
        return this.alunoss.find( (alunos) => alunos.descricao == entrada) ;
    }
    //const sameWord = (element) => element > 13;
}
/*
(async () => {
    try {
        // Criar
        await AlimentoModel.create({
            idalimento: 122412313,
            nomealimento: 'Teste 2',
            unidade_medida: 'UN'
        });
        // Consultar
        const alimentos = await AlimentoModel.findAll();
        console.log(alimentos);
        // Consulta com o where
        const alimentosComKG = await AlimentoModel.findAll({
            where: {
                unidade_medida: 'KG'
            }
        });
        console.log(alimentosComKG);
    } catch (error) {
        console.error(error);
    }
})();
*/