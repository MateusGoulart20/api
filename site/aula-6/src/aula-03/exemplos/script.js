function mudarCor() {
    document.body.style.backgroundColor = 'red';
}

function adicionar() {
    const contador = document.getElementById('contador');
    let valor = Number(contador.innerHTML);
    valor++;
    contador.innerText = String(valor);
}