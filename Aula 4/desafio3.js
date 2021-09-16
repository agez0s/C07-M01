/* DESAFIO 3
Caixa eletrônico
Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1. */

let valorSacado = +prompt("Quanto você deseja sacar? (entre 10-600");

let notas100, notas50, notas10, notas5, notas1;

if (valorSacado < 10 || valorSacado > 600) {
  console.log("Saque indisponível! Tente um valor entre 10 e 600")
}
else {
  notas100 = Math.floor(valorSacado/100);
  troco = valorSacado % 100;
  notas50 = Math.floor(troco/50);
  troco = troco % 50;
  notas10 = Math.floor(troco/10);
  troco = troco % 10;
  notas5 = Math.floor(troco/5);
  troco = troco % 5;
  notas1 = troco

  console.log(`Notas de R$100: ${notas100}`);
  console.log(`Notas de R$50: ${notas50}`);
  console.log(`Notas de R$10: ${notas10}`);
  console.log(`Notas de R$5: ${notas5}`);
  console.log(`Notas de R$1: ${notas1}`);
  
}
