/* EXERCÍCIO 06 - Faça um programa que peça dois números, imprima o maior deles ou imprima "Numeros iguais" se os números forem iguais. */

let numero1 = +prompt("Digite um número");
let numero2 = +prompt("Digite outro número");

if (numero1 == numero2) {
  console.log("Os números são iguais")
}
else {
  console.log("O maior número é " +Math.max(numero1,numero2));
}