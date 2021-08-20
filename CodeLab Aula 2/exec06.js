/* Exercício 6 -  Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário:
Quantidade de vida de um monstro (entre 10 e 50);
Valor do ataque do jogador por turno (entre 5 e 10);
Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro.
O jogador irá derrotar o monstro em 8 turnos.

 */

let vidaMonstro = +prompt("Digite a quantidade de vida do monstro (entre 10-50)");
let valorAtaque = +prompt("Digite o valor do ataque do jogador, por turno (entre 5-10)");

let numeroTurnos = Math.ceil(vidaMonstro / valorAtaque);
console.log("Número de turnos para derrotar o monstro: " +numeroTurnos);
