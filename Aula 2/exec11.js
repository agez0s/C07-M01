// Exercício 11 -   Calculadora de aumento de aluguel - Parte 1
// A sua calculadora vai receber o valor do aluguel e calcular o aumento baseado no IGPM de 31%.
// A calculadora deve apresentar o aluguel reajustado no formato R$9999.99
// Exemplo:
// Valor do aluguel = 1000
// Valor do aluguel reajustado = R$ 1310,00

let igpm = 31
let aluguel = +prompt("Digite o valor do aluguel");

let aluguelFinal = aluguel*igpm/100
aluguelFinal = aluguel+aluguelFinal

console.log(`O valor final do aluguel é ${aluguelFinal}`);