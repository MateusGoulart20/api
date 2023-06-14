/*
  3) Com base nessa lista de usuários ['Hélio', 'Evandro', 'Luisa', 'Lucas', 'Osmar'],
   faça as seguintes manipulações:
    - Mostre a lista em ordem alfabética;
    - Pegue a primeira letra de cada nome e mostre em um único console;
    - Remova todos os nomes que comece com "L" depois mostre o resultado;
*/
let users = ['Hélio', 'Evandro', 'Luisa', 'Lucas', 'Osmar']
users.sort()
console.log(users)
let u = users
var letters =''
u.forEach(element => {
    letters += element.slice(0,1);
})
console.log(letters)


u = users.splice(2,2)
console.log(users)

