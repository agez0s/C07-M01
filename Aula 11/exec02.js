/* Tarefa 02 - Desafio:
Insira esses 5 filmes dentro de uma lista 
chamada catalogo, e mostre na tela os 
dados de cada um varrendo a lista com 
um for. */

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

let catalogo = [filme1, filme2, filme3, filme4, filme5]

for (let i of catalogo) {
    console.log(i.dados());
}