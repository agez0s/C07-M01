const prompt = require(`prompt-sync`)();

class Carro {
    constructor(marca, modelo, ano, proprietario) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.proprietario = proprietario
    }
}

// Exercício: crie uma classe Pessoa, com os atributos:
// nome, peso, idade
// e os métodos:
// envelhecer, engordar, emagrecer, dados

//Depois crie 2 objetos dessa classe e teste se os métodos funcionam

class Pessoa {
    constructor(nome, peso, idade) {
        this.nome = nome
        this.peso = peso
        this.idade = idade
    }
    envelhecer() {
        this.idade++
    }
    engordar() {
        this.peso++
    }
    emagrecer() {
        this.peso--
    }
}

let pessoa1 = new Pessoa("Zé", 100, 20)
pessoa1.emagrecer()
pessoa1.emagrecer()
console.log(pessoa1)