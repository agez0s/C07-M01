// EXERCÍCIO 02 - Escreva um programa que solicite uma frase ao usuário e escreva a frase toda em maiúscula e sem espaços em branco.

let frase = prompt("Digite uma frase");
frase = frase.toUpperCase().replace(/\s+/g, '');
console.log(frase);