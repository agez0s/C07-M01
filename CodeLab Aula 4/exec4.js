/* EXERCÍCIO 04 - Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
Crie uma variável para receber o valor, com conversão para int
Para um número ser par, a divisão dele por 2 tem que dar resto 0 */

let numero = +prompt("Digite um número");

if(numero % 2 == 0) {
    console.log("O número é par");
}
else {
    console.log("O número é ímpar");
}
