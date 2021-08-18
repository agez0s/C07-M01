// Exercício 5 - Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.
// Cadastro de Clientes
// 0 – Fim
// 1 - Inclui
// 2 - Altera
// 3 - Exclui"
// 4 - Consulta"

let opcoes = ["Fim", "Inclui", "Altera", "Exclui", "Consulta"];

console.log("Cadastro de Clientes");
console.log("0 - Fim\n1 - Inclui\n2 - Altera\n3 - Exclui\n4 - Consulta");
let escolha = +prompt("Escolha sua opção");

console.log(`${escolha} - ${opcoes[escolha]}`);