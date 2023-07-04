const { response } = require("express");

function adicionarTarefa() {
    const inputTarefa = document.getElementById('tarefa')
    const listaTarefas = document.getElementById('tarefas')
    listaTarefas.innerHTML += `<li>${inputTarefa.value}</li>`
    inputTarefa.value = '';
}
function calcularNota(){
    const n1 = Number(document.getElementById('nota1').value);
    const n2 = Number(document.getElementById('nota2').value);
    const n3 = Number(document.getElementById('nota3').value);
    const n4 = Number(document.getElementById('nota4').value);
    const sum = (n1+n2+n3+n4)/4;
    document.getElementById('resultado').innerHTML = sum;
}

function mudarCor() {
    document.body.style.backgroundColor = '#00ffff';
}
function mudarTitulo() {
    const titulo = document.getElementById('titulo');
    titulo.innerText = 'ESPERRRAAAA';
}

function add() {
    const titulo = document.getElementById('titulo');
    let valor = Number(titulo.innerText);
    valor++;
    titulo.innerText = valor;
}

function mudarCor() {
    document.body.style.backgroundColor = 'red';
}

function adicionar() {
    const contador = (document.getElementById('contador'));
    let valor = Number(contador.innerHTML);
    valor++;
    contador.innerText = String(valor);
}
function adicionar() {
    const titulo = document.getElementById('titulo');
    let valor = Number(titulo.innerText);
    valor += 1;
    titulo.innerText = valor;
    // console.log(valorContador.innerText);
}

function mudarCor() {
    document.body.style.backgroundColor = 'red';
}

function mudarTitulo() {
    const titulo = document.getElementById('titulo');
    titulo.innerText = 'Titulo mudado!';
}


function adicionarTarefa() {
    const inputTarefa = document.getElementById('tarefa');
    const listaTarefas = document.getElementById('tarefas');
    listaTarefas.innerHTML += `<li>${inputTarefa.value}</li>`
    inputTarefa.value = '';
}
