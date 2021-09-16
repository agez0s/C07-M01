/* EXERCÍCIO 03 - Elabore um programa que recebe o seu nome, endereço e hobby e mostra cada uma das informações da seguinte forma:
// Nome -> Letra maiúscula
// Endereço -> Letra minúscula
// Hobby -> Primeira letra maiúscula
// Exemplo Entrada:
Nome: bruno fabri
Endereço: Rua ABC
Hobby: jogar cs
Exemplo Saída:
Nome: BRUNO FABRI
Endereço: rua abc
Hobby: Jogar cs */

let nome = prompt("Digite seu nome:");
let endereco = prompt("Seu endereço:");
let hobby = prompt("Seu hobby preferido:");

console.log("Nome: " +nome.toUpperCase());
console.log("Endereço: " +endereco.toLowerCase());
console.log("Hobby preferido: " +hobby.charAt(0).toUpperCase() + hobby.slice(1));