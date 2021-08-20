/* EXERCÍCIO 05 - Parte 1
Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo.
Parte 2
Agora implemente a funcionalidade de não aceitar o número 0, no input. */

let numero = +prompt("Digite um número");

if (numero > 0) {
  console.log("O número é positivo");
}
else if (numero < 0) {
  console.log("O número é negativo");
}
else {
  console.log("O número não pode ser igual a zero. Digite outro");
}