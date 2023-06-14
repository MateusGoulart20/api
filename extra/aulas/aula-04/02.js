/*
 2) Com base nessa lista de numeros [5, 9, 8, 6, 1, 10],
 crie um programa que calcule a média aritmética desses número e mostre.
*/
let numbers = [5, 9, 8, 6, 1, 10]
let som = 0
numbers.forEach(element => {
    som+=element
}) 
console.log(som/numbers.length)