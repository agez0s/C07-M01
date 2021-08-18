/* Exercício 9 -   Você está na flor da idade?
Defina uma variável para o valor do ano do nascimento;
Defina uma variável para o valor do ano atual;
Defina uma variável que calcula o valor final da idade da pessoa;
Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".
 */

let anoNascimento = +prompt("Valor do ano do nascimento");
let anoAtual = +prompt("Ano atual");
let idade = anoAtual - anoNascimento;
console.log(`Só ${idade}? Você está na flor da idade`)