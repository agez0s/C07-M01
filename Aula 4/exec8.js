/* EXERCÍCIO 08 - Crie um programa em JavaScript que peça a nota do aluno, que deve ser um number entre 0.00 e 10.0
Se a nota for menor que 6.0, deve exibir a nota F.
Se a nota for de 6.0 até 7.0, deve exibir a nota D.
Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A. */

let nota = +prompt("Digite a sua nota");
if (nota < 6) {
  console.log("Você obteve conceito F")
}
else if (nota < 7) {
  console.log("Você obteve conceito D")
}
else if (nota < 8) {
  console.log("Você obteve conceito C")
}
else if (nota < 9) {
  console.log("Você obteve conceito B")
}
else {
  console.log("Você obteve conceito A")
}