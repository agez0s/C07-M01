/* Exercício 7 -  E os 10% do garçom?
Defina uma variável para o valor de uma refeição que custou R$ 42,54;
Defina uma variável para o valor da taxa de serviço que é de 10%;
Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.
 */

let valorRefeicao = 42.54;
let taxaServico = 10;
let totalGarcom = valorRefeicao * taxaServico / 100;
let totalConta = valorRefeicao + totalGarcom;

console.log("Total da conta: " +new Intl.NumberFormat(`pt-BR`, { style: `currency`, currency: `BRL` }).format(totalConta));
