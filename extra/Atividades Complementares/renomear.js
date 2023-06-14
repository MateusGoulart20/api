/** Classes e POO (Programação Orientada à Objetos):

	- A orientação a objetos é um paradigma de programação que se baseia
		no conceito de objetos.

	- Um objeto é uma instância de uma classe e representa uma entidade
		do mundo real, contendo dados e comportamentos associados.

	- A orientação a objetos visa organizar o código em unidades autônomas
		e reutilizáveis, facilitando o desenvolvimento e manutenção de
		software.
*/

/** Princípios da POO:
		- Encapsulamento => Os dados e comportamentos relacionados são
		agrupados em um único objeto, que controla o acesso a essas
		informações.

		- Herança => Permite criar novas classes (classe filho ou subclasses) a partir de classes existentes (classe pai ou super),
		aproveitando atributos e métodos já implementados.

		- Polimorfismo => Diferentes objetos podem responder de maneira
		diferente a uma mesma mensagem, permitindo o uso de interfaces
		comuns.

		- Abstração => Permite modelar objetos do mundo real em termos de suas
		características essenciais, ignorando detalhes desnecessários.
 */

/** Exemplos: */

/** Simples
class Carro {
	constructor(marca, modelo, ano) {
		this.marca = marca;
		this.modelo = modelo;
		this.ano = ano;
	}

	acelerar() {
		console.log(`O modelo ${this.modelo} está acelerando!!`);
	}
}

const meuCarro = new Carro('Ford', 'Mustang', 2022);
meuCarro.acelerar();
*/

// Aplicando os Princípios de POO:

/** Encapsulamento:
class Carro {
	// Atributo privado
	#marca;

	constructor(marca) {
		this.#marca = marca
	}

	// Métodos GET e SET para poder acessar o atributo privado 'marca' fora da classe
	get marca() {
		return this.#marca;
	}
	set marca(valor) {
		this.#marca = valor;
	}
}

const meuCarro = new Carro('Marca Teste');
meuCarro.marca = 'Nova Marca';
 */

/** Herança:
class Pessoa {
	constructor(nome, endereço) {
		this.nome = nome;
		this.endereço = endereço;
	}

	cadastrar() {
		console.log(`${this.nome} foi cadastrado! Em: ${this.endereço}`);
	}
}

class PessoaFisica extends Pessoa {
	constructor(nome, endereço, cpf) {
		super(nome, endereço);
		this.cpf = cpf;
	}
}

class PessoaJuridica extends Pessoa {
	constructor(nome, endereço, cnpj) {
		super(nome, endereço);
		this.cnpj = cnpj;
	}
}

const pessoaFisica = new PessoaFisica('Marcos', 'Rua tal', '005.123.151-23');
const pessoaJuridica = new PessoaJuridica('Companhia', 'Rua de Tal', '00123141231/123141');
pessoaFisica.cadastrar();
pessoaJuridica.cadastrar();
 */

/** Polimorfismo:
class Animal {
	constructor(nome) {
		this.nome = nome;
	}

	fazerBarulho() {
		console.log(`${this.nome} está fazendo barulho!`);
	}
}

class Cachorro extends Animal {
	fazerBarulho() {
		console.log(`${this.nome} está latindo!`);
	}
}

class Gato extends Animal {
	fazerBarulho() {
		console.log(`${this.nome} está miando!`);
	}
}

const cachorro = new Cachorro('Lili');
cachorro.fazerBarulho();

const gato = new Gato('Lulu');
gato.fazerBarulho();
 */

/** Abstração:
// Classe abstrada:
// não pode ser instânciada diretamente
// fornece uma estrutura base para suas subclasses
class Animal {
	constructor(nome) {
		if (new.target === Animal) {
			throw new Error('Não é possível instanciar uma classe abstrata.');
		}

		this.nome = nome;
	}

	emitirSom() {
		throw new Error('O método "emitirSom" deve ser implementado!');
	}
}

class Cachorro extends Animal {
	emitirSom() {
		console.log(`${this.nome} está latindo!`);
	}
}

const cachorro = new Cachorro('Teste');
cachorro.emitirSom();
 */

// Extras:

/** Método estático (static)
Métodos estáticos são métodos que pertencem à classe em si, em vez de
pertencerem a uma instância da classe.

Exemplo:
class Utilitarios {
	static formatarCPF(cpf) {
		console.log(`CPF: ${cpf} formatado!`);
	}
}

Utilitarios.formatarCPF('112.315.132-13');
 */

/** Módulos
	Utilizado para separar e organizar nosso projeto

	// Animal.js
	module.exports = class Animal {
		constructor(nome) {
			this.nome = nome;
		}

		fazerBarulho() {
			console.log(`${this.nome} está fazendo barulho!`);
		}
	}

	// index.js
	const Animal = require('./Animal');

	const animal = new Animal('Cachorro');
	animal.fazerBarulho();
*/

const Animal = require('./Animal');

const animal = new Animal();
animal.fazBarulho();
