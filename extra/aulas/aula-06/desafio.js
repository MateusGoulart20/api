/*
Crie um programa em JavaScript que tenha uma função chamada
“calcularAreaRetangalo“, ela deve receber os parâmetros base e altura, e
deve retornar a área do retângulo. Lembre-se de fazer o tratamento das
exceções.
*/


function calcularAreaRetangalo(base, altura){
    try {
        if(!Number(altura)) {
            throw new Error("altura não é numero")
        }   
        if(altura <= 0){
            throw new Error("altura não pode ser menor ou igual a zero")
        }
        if(!Number(base)) {
            throw new Error("base não é numero")
        }
        if(base <= 0){
            throw new Error("base não pode ser menor ou igual a zero")
        }
        return base*altura
    } catch (error) {
        console.error(error)
    }   
}
console.log(calcularAreaRetangalo(30,20))
console.log(calcularAreaRetangalo(2,'a'))
console.log(calcularAreaRetangalo('v','a'))
console.log(calcularAreaRetangalo('v',30))
