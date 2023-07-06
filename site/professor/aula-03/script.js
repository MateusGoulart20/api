function mudarCor() {
    document.body.style.backgroundColor = 'red';
}

function mudarTitulo() {
    const titulo = document.getElementById('titulo');
    titulo.innerText = 'Titulo mudado!';
}

function adicionar() {
    const titulo = document.getElementById('titulo');
    let valor = Number(titulo.innerText);
    valor += 1;
    titulo.innerText = valor;
    // console.log(valorContador.innerText);
}

function adicionarTarefa() {
    const inputTarefa = document.getElementById('tarefa');
    const listaTarefas = document.getElementById('tarefas');
    listaTarefas.innerHTML += `<li>${inputTarefa.value}</li>`
    inputTarefa.value = '';
}
