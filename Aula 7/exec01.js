// Calcular a soma de todos os dígitos de um inteiro inteiro positivo

let soma = 0;
let numero = prompt("Insira um número");
for (let nums of numero) {
  let int = parseInt(nums)
  soma = soma + int
}
console.log(`O resultado da soma dos números é ${soma}`);