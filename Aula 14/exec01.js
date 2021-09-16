/* EXERCICIO 1 - Crie um programa que gerencie o aproveitamento de um jogador de futebol. 
O programa vai ler o nome do jogador e quantas partidas ele jogou. Depois vai ler a quantidade de gols feitos em cada partida. 
No final, tudo isso será guardado em um objeto, incluindo o total de gols feitos durante o campeonato.   */

const prompt = require('prompt-sync')();

let jogador = {}

jogador.nome = prompt("Qual o nome do jogador? ")
jogador.partidas = prompt("Quantas partidas ele jogou? ")
jogador.gols = []
for (let i = 0; i < jogador.partidas; i++) {
    jogador.gols.push(+prompt(`Quantos gols ele fez na ${i+1}a partida? `))
}

jogador.totalgols = 0
for (let i of jogador.gols) {
    jogador.totalgols = jogador.totalgols + i
}
console.log(jogador)