/* Exercício 10 -   Conversor de moedas
 Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para:
DOLAR
EURO
LIBRA ESTERLINA
DÓLAR CANADENSE
PESO ARGENTINO
PESO CHILENO
Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real.
Mostrar o resultado no formato U$9999.99
 */

console.log("Cotações para o dia 17/08/2021");
let valorReal = +prompt("Digite o valor em R$");
let cotacaoDolar = 5.30;
let cotacaoEuro = 6.20;
let cotacaoLibra = 7.28;
let cotacaoCanada = 4.19;
let cotacaoArgentina = 0.055;
let cotacaoChile = 0.0067;

console.log("---------------------------");
console.log(`Valor em R$: ${valorReal}`);
console.log();
console.log("Valor em Dólar Americano: " +new Intl.NumberFormat(`pt-BR`, { style: `currency`, currency: `USD` }).format(valorReal*cotacaoDolar));
console.log("Valor em Euro: " +new Intl.NumberFormat(`pt-BR`, { style: `currency`, currency: `EUR` }).format(valorReal*cotacaoEuro));
console.log("Valor em Libra: " +new Intl.NumberFormat(`pt-BR`, { style: `currency`, currency: `GBP` }).format(valorReal*cotacaoLibra));
console.log("Valor em Dólar Canadense: " +new Intl.NumberFormat(`pt-BR`, { style: `currency`, currency: `CAD` }).format(valorReal*cotacaoCanada));
console.log("Valor em Peso Argentino: " +new Intl.NumberFormat(`pt-BR`, { style: `currency`, currency: `ARS` }).format(valorReal/cotacaoArgentina));
console.log("Valor em Peso Chileno: " +new Intl.NumberFormat(`pt-BR`, { style: `currency`, currency: `CLP` }).format(valorReal/cotacaoChile));