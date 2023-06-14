/*
Exercícios:
    1) Crie um programa em JS, que tenha uma lista global chamada livros, que tenha 4 funções:
- cadastrarLivro(): ela recebe como parâmetro um objeto contendo o nome do livro,
data de publicação (dd/mm/yyyy), nome do autor e categoria (Romance, Ficção, Ação, Infantil).
Ela deve ser responsável por fazer o tratamento das exceções, adicionar o livro na lista de livros e retornar e retornar a nova lista.
Crie um id de identifação para cada livro cadastrado.
- deletarLivro(): ela deve receber o ID do livro, fazer o tratamento de exceções e remover o livro da lista de livros e retornar uma nova lista.
- filtrarLivros(): ela deve receber um nome de um livro, tratar as exceções e retornar as informações do livro pesquisado.
- interface(): ela vai ser responsável por integrar todas as outras funções, executar o programa no terminal e capturar as requisições do usuário:
cadastrar, deletar, filtrar ou sair do programa.
*/
const prompt = require('prompt-sync')({ sigint: true });
var listaLivro = [];
const livro = {
    nome: null,
    data: null,
    autor: null,
    categoria: null,
    id: null
}
var id = 1;
let trans, menu = true, logi = false;

function cadastrarLivro() {
    console.log("Cadastramento");
    trans = prompt(" Insira o nome do livro\n")
    livro.nome = trans;
    while(true){
        trans = prompt(" Insira a publicação do livro no formato (dd/mm/yyyy)\n")
        //console.log(trans.length+' '+trans.slice(2,3)+' '+trans.slice(5,6))
        if(trans.length == 10)
            if(trans.slice(2,3)=='/')
                if(trans.slice(5,6)=='/'){
                    livro.data = trans;
                    break;
                }        
    }
    console.log("Cadastramento");
    trans = prompt(" Insira o nome do autor\n")
    livro.autor = trans;
    logi = true
    while(logi){
        trans = prompt(" Insira a categoria do livro)\n")
        logi = true;
        switch (trans){
            case "Romance":
            case "Ficção":
            case "Ação":
            case "Infantil":
                livro.categoria = trans;
                logi = false;
                break;
        }
    }
    livro.id = id;
    listaLivro.push(livro);    
}

function deletarLivro(){
    let listaIdentificada = identificar(
        prompt("O campo a usar\n"),
        prompt("O valor a chavear\n")
    )
    let a = 0;
    listaIdentificada.forEach(element => {
        listaLivro.splice(element-a, 1)
        a++
    });
}
function filtrarLivros(){
    let listaIdentificada = identificar(
        prompt("O campo a usar\n"),
        prompt("O valor a chavear\n")
    )
    listaIdentificada.forEach(element => {
        console.log(listaLivro[element])
    });
}
function interface(){
    console.log(" Seja bem vinde. ");
    while (menu){
        //console.log(listaLivro)
        trans = Number(prompt("1-Cadastro\n2-Exclusao\n3-Filtragem\n4-Sair\n"));
        if(Number.isInteger(trans)){
            switch (trans){
                case 1:
                    cadastrarLivro()
                break;
                case 2:
                    deletarLivro()
                break;
                case 3:
                    filtrarLivros()
                break;
                case 4:
                    menu = !menu;
                break;
            }
        }
    }
}
interface();

function identificar(campo, compare){
    let lista = [], posi = 1;
    switch (campo){
        case "nome":
            listaLivro.forEach(element => {
                if(element.nome == compare) lista.push(posi)
                posi++
            });
        break;
        case "autor":
            listaLivro.forEach(element => {
                if(element.autor == compare) lista.push(posi)
                posi++
            });
        break;
        case "data":
            listaLivro.forEach(element => {
                if(element.data == compare) lista.push(posi)
                posi++
            });
        break;
        case "categoria":
            listaLivro.forEach(element => {
                if(element.categoria == compare) lista.push(posi)
                posi++
            });
        break;
        case "id":
            listaLivro.forEach(element => {
                if(element.id == compare) lista.push(posi)
                posi++
            });
        break;
        default:
            return null
    }
    return lista;    
}      