// Exercício 12- Calculadora de aumento de aluguel - Parte 2
// Altere sua calculadora (feita na parte 1) para receber além do valor do aluguel,
// o percentual do reajuste no formato 99%.

// Dica: Descubra uma forma de transformar o percentual recebido em um
// número para efetuar o cálculo.
// Exemplo:
// Valor do aluguel = 1000
// Percentual do reajuste = 31%
// Valor do aluguel reajustado = R$1310,00

let aluguel = +prompt("Digite o valor do aluguel");
let reajuste = prompt("Digite a porcentagem do reajuste");
reajuste = parseFloat(reajuste);

let aluguelFinal = aluguel*reajuste/100
aluguelFinal = aluguel+aluguelFinal

console.log(`O valor final do aluguel é ${aluguelFinal}`);
