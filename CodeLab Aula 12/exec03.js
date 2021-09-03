/* DESAFIO: Crie um programa que leia nome, ano de nascimento e carteira de trabalho e cadastre-os (com idade) em um objeto. 
Se por acaso a CTPS for diferente de 0, o objeto receberá também o ano de contratação e o salário. 
Calcule e acrescente, além da idade , com quantos anos a pessoa vai se aposentar. 
Considere que o trabalhador deve contribuir por 35 anos para se aposentar.  */

const prompt = require("prompt-sync")();

let contrib = {}

contrib.nome = prompt("Qual o nome do contribuinte? ")
contrib.ano = prompt("Qual o ano de nascimento? ")

let anoAtual = new Date().getFullYear();
contrib.idade = anoAtual - contrib.ano

if (contrib.ctps != 0){
   contrib.contratacao = parseInt(prompt('Ano da contratação: '));
   contrib.salario = parseInt(prompt('Salário: R$ '));
   contrib.aposentadoria = contrib.contratacao + 35 - anoAtual + contrib.idade ;
};
    
console.log(dados);

