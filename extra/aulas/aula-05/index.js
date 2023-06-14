const pessoa = {
    nome: 'Mateus',
    idade: 20,
    tarefas: [
        'Alvejar', 'Pilhar'
    ],
    endereco: {
        cep: '12345',
        rua: 'florial'
    },
    habilidades: [
        'Cozinhar', 'Coser'
    ]
}
const calculador = {
    x: 10,
    y: 2,
    somar: function (x,y) {return x+y},
    subtr: function (x,y) {return x-y}
}

//console.log(pessoa)
//console.table(pessoa)
console.log(calculador.somar(2, 3))

const matematico = { ...pessoa, ...calculador}
console.table(matematico)
for(let key in matematico){
    console.log(key)
}