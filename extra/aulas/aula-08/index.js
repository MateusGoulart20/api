class Animal {
    cor; nome; tamanho;

    constructor(cor, tamanho, nome){
        this.cor = cor;
        this.tamanho = tamanho;
        this.nome = nome;
        console.log(" Animal ")
    }

    fazBarulho () {
        console.log(`${this.nome} faz o urro`);
    }
}
const gato = new Animal("Rosa",2.3,"Pantera");
gato.fazBarulho();

class Pessoa {
    #nome;
    constructor(nome){
        this.nome = nome;
    }
    get_nome(){
        return this.nome
    }
    set_nome(valor){
        this.nome=valor
    }
}

const fernad = new Pessoa();
fernad.set_nome("fernandAO")
console.log(fernad.get_nome())

class Cachorro extends Animal {
    tipo;
    fazBarulho(){
        //
        console.log(this.nome+" do tipo "+this.tipo);
    }
    constructor(cor, tamanho, nome, tipo){
        super(cor, tamanho, nome);
        this.tipo = tipo;
    }
}

const perro = new Cachorro("Verde",32,"Livana", "Lassia");
console.log(perro.fazBarulho());

class Util {
    static line(){
        console.log("--------------------");
    }
}
Util.line();

