/* DESAFIO 02
Jogo da adivinhação
Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu. */

let numeroRandom = Math.floor(Math.random() * (10 - 0 + 1)) + 0;

let meuChute = +prompt("Adivinhe meu número! (0-10)");

if (meuChute == numeroRandom) {
  console.log(`Parabéns! Eu pensei no número ${meuChute}`);
}
else {
  console.log(`Errou! Eu pensei no número ${numeroRandom}`);
}