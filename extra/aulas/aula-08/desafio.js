/*
Problema: Formas Geométricas
Contexto: Suponha que você esteja desenvolvendo um programa para lidar com formas geométricas simples.
Crie uma classe base chamada Forma que tenha um método chamado calcularArea() que retorna a área da forma. 				

Problema: Formas Geométricas
Descrição do problema: A seguir, crie três classes derivadas da classe Forma: Retângulo, Trapézio e Círculo.
Cada uma dessas classes deve herdar o método calcularArea() da classe Forma e calcular suas área de forma específica. 
*/

class Forma {
    calcularArea(){
        return;
    }
}

class Retangulo extends Forma {
    #base; #altura;
    getBase(){return this.#base}
    setBase(valor){this.#base = valor}
    getAltura(){return this.#altura}
    setAltura(valor){this.#altura = valor}
    calcularArea(){
        return this.base*this.altura;
    }
}
class Trapezio extends Forma{
    #base1;#base2;#altura;
    getBase1(){return this.#base1}
    setBase1(valor){this.#base1 = valor}
    getBase2(){return this.#base2}
    setBase2(valor){this.#base2 = valor}
    getAltura(){return this.#altura}
    setAltura(valor){this.#altura = valor}
    calcularArea(){
        return (this.#base1+this.#base2)*this.#altura/2
    }
}
class Circulo extends Forma {
    #raio;
    calcularArea(){
        return this.#raio*this.#raio*Math.PI;
    }
    getRaio(){return this.#raio}
    setRaio(valor){this.#raio = valor}
}
class Pessoa {
    matematica(forma){
        console.log(forma.calcularArea());
    }
}
/*
circ = new Circulo();
circ.setRaio(2);
pess = new Pessoa();
pess.matematica(circ);
*/