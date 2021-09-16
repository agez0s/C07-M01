/* DESAFIO: Crie um programa que leia nome, gênero e idade de várias pessoas, guardando os dados de cada pessoa em um objeto e 
todos os objetos em uma lista. No final, mostre:​
A) Quantas pessoas estão cadastradas.​
B) A média da idade.​
C) Uma lista com as pessoas com gênero feminino.​
D) Uma lista com as idades que estão acima da média.​
OBS: O programa deve garantir que quando perguntar ao usuário se deseja continuar a resposta seja somente S ou N.
 */
const prompt = require('prompt-sync')();
let pessoas = []

let quantas = +prompt("Quantas pessoas você quer cadastrar? ")

for (let i = 0; i < quantas; i++) {
    let newPessoa = {}
    newPessoa.nome = prompt("Qual o nome da pessoa? ")
    newPessoa.genero = prompt("Qual o gênero da pessoa? (M/F/Outro) ")
    newPessoa.idade = +prompt("Qual a idade da pessoa? ")
    console.log()
    pessoas.push(newPessoa)
}

console.log()
console.log(`Total de pessoas cadastradas: ${pessoas.length}`)
console.log()
let somaIdade = 0
for (let i of pessoas) {
    somaIdade = somaIdade + i.idade
}
let media = somaIdade / pessoas.length
console.log(`Média de idade: ${media} anos`);
console.log()
let feminino = 0
for (let i of pessoas) {
    if (i.genero.toLowerCase == "f" || i.genero.toLowerCase == "feminino" ) {
        feminino++
    }
}
console.log(`Total de pessoas do gênero feminino: ${feminino}`)
console.log()
let idadesAcima = []
for (let i of pessoas) {
    if (i.idade > media) {
        idadesAcima.push(i.idade)
    }
}
console.log("Idades acima da média: " +idadesAcima)

