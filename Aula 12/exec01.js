/* EXERCÍCIO 1 - Faça um programa que leia nome e média de um aluno, guardando também a situação em um objeto. 
No final, mostre o conteúdo da estrutura na tela. A média para aprovação é 7. 
Se o aluno tirar entre 5 e 6.9 está de recuperação, caso contrário é reprovado.  */

const prompt = require('prompt-sync')();

let aluno = {}

aluno.nome = prompt("Digite o nome do aluno: ")
aluno.media = prompt("Digite a média do aluno: ")

if (aluno.media >= 7 ) {
    aluno.situacao = "Aprovado"
    console.log(`${aluno.nome} está aprovado!`)
}
else if (aluno.media >=5 ) {
    aluno.situacao = "Recuperacao"
    console.log(`${aluno.nome} está de recuperação.`)
}
else if (aluno.media < 5) {
    aluno.situacao = "Reprovado"
    console.log(`${aluno.nome} está reprovado.`)
}

console.log(aluno)