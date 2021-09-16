/* DESAFIO 01
Reajuste salarial
As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%
Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento. */

let salario = +prompt("Digite o salário do colaborador");
let salarioFinal;

if (salario < 280) {
  salarioFinal = salario+salario*0.2
}
else if (salario < 700) {
  salarioFinal = salario+salario*0.15
}
else if (salario < 1500) {
  salarioFinal = salario+salario*0.1
}
else {
  salarioFinal = salario+salario*0.05
}

let aumento = salarioFinal - salario
let reajuste = aumento/salario*100;

console.log(`O salário inicial era de R$ ${salario}`);
console.log(`O percentual aplicado foi de ${reajuste}%` );
console.log(`O aumento foi de R$ ${aumento}`);
console.log(`O salário reajustado é R$ ${salarioFinal}`);