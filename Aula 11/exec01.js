/* Tarefa 01:
Crie catálogo de filmes com 5 filmes, cada filme precisa ser um objeto, 
cada objeto precisa ter os seguintes atributos:
- Nome
- Duração
- Ano
- Diretor
- Atores principais(lista)
- Dados (função anônima que retorna uma string com os dados do filme)
No final mostra no console os dados de todos os filmes ao mesmo 
tempo. */

let filme1 = {
    nome: "Titanic",
    duracao: 194,
    ano: 1997,
    diretor: "James Cameron",
    atores: ["Leonardo DiCaprio","Kate Winslet", "Billy Zane"],
    dados() { 
        return `O filme ${this.nome}, dirigido por ${this.diretor} foi lançado em ${this.ano}. Durante ${this.duracao} minutos, você vai poder conferir a atuação de ${this.atores}.` 
    }
}

let filme2 = {
    nome: "Rambo: First Blood",
    duracao: 93,
    ano: 1982,
    diretor: "Ted Kotcheff",
    atores: ["Sylvester Stallone", "Brian Dennehy", "Richard Crenna"],
    dados() { 
        return `O filme ${this.nome}, dirigido por ${this.diretor} foi lançado em ${this.ano}. Durante ${this.duracao} minutos, você vai poder conferir a atuação de ${this.atores}.` 
    }
}

let filme3 = {
    nome: "O Predador",
    duracao: 107,
    ano: 1987,
    diretor: "John McTiernan",
    atores: ["Arnold Schwarzenegger","Carl Weathers", "Kevin Peter Hall"],
    dados() { 
        return `O filme ${this.nome}, dirigido por ${this.diretor} foi lançado em ${this.ano}. Durante ${this.duracao} minutos, você vai poder conferir a atuação de ${this.atores}.` 
    }
}

let filme4 = {
    nome: "Vingadores: Ultimate",
    duracao: 181,
    ano: 2019,
    diretor: "Anthony e Joe Russo",
    atores: ["Robert Downey Jr.","Chris Evans", "Mark Ruffalo"],
    dados() { 
        return `O filme ${this.nome}, dirigido por ${this.diretor} foi lançado em ${this.ano}. Durante ${this.duracao} minutos, você vai poder conferir a atuação de ${this.atores}.` 
    }
}

let filme5 = {
    nome: "Jurassic Park",
    duracao: 127,
    ano: 1993,
    diretor: "Steven Spielberg",
    atores: ["Sam Neill","Laura Dern", "Jeff Goldblum"],
    dados() { 
        return `O filme ${this.nome}, dirigido por ${this.diretor} foi lançado em ${this.ano}. Durante ${this.duracao} minutos, você vai poder conferir a atuação de ${this.atores}.` 
    }
}

console.log(filme1.dados());
console.log(filme2.dados());
console.log(filme3.dados());
console.log(filme4.dados());
console.log(filme5.dados());