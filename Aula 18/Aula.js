const prompt = require('prompt-sync')();

class Animal {
    constructor(nome, idade, tutor){
        this.nome = nome
        this.idade = idade
        this.tutor = tutor
    }

    consultar() {
        console.log(`O animal ${this.nome} tem ${this.idade} anos e pertence a ${this.tutor}`)
    }
}

class Cachorro extends Animal {
    constructor(nome,idade,tutor, porte){
        super(nome,idade,tutor)
        
        this.porte = porte
    }

}

let animal1 = new Animal("Belka", "4 meses", "Gabriel")

animal1.consultar();