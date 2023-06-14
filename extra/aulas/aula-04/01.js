/*
 1) Com base nessa lista de mercadorias ['Maça', 'Pão', 'Nutella', 'Melancia', 'Leite', 'Arroz', 'Feijão'], faça algumas operações e mostre o resultado:
    - Remove o último e primeiro elemento;
    - Remove os elementos 'Nutella' e 'Melancia';
    - Imprima o index do elemento 'Leite';
    - Adicione uma nova mercadoria chamada 'Cebola' na lista
*/
//- Remove o último e primeiro elemento;
let mercadoria = ['Maça', 'Pão', 'Nutella', 'Melancia', 'Leite', 'Arroz', 'Feijão']
let a = mercadoria.shift()
a = mercadoria.pop()
console.log(mercadoria)

//- Remove os elementos 'Nutella' e 'Melancia';
mercadoria.splice(mercadoria.indexOf('Nutella'),1)
mercadoria.splice(mercadoria.indexOf('Melancia'),1)

//- Imprima o index do elemento 'Leite';
console.log(mercadoria.indexOf('Leite'));

//- Adicione uma nova mercadoria chamada 'Cebola' na lista
mercadoria.push('Cebola')
console.log(mercadoria)