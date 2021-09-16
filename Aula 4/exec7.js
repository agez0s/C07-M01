/* EXERCÍCIO 07 - Crie um programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, caso escreva outra letra: Sexo Inválido. */

let sexo = prompt("Digite o seu sexo (M/F)");

if (sexo == "m") {
  console.log("Você é do sexo masculino")
}
else if (sexo == "f") {
  console.log("Você é do sexo feminino")
}
else {
  console.log("Sexo inválido")
}