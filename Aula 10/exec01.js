/* Construa uma função que, dado uma string, 
retorna o tamanho do seu maior intervalo entre as 
letras. Caso não existam intervalos entre as letras A 
e B, retorne 0.
Para realizar este exercício, você vai precisar:
•Construir uma função chamada lacuna, que 
receberá como parâmetro uma String.
•Iterar a string;
•Encontrar o primeiro valor A no binário adicionado;
•Encontrar a quantidade de B entre A. */

let string = "AAAABBBAABABBAAAAAAABBAAAAA"

let ultimo
let qtd = 1
let maiorqtd = 1
function lacuna(str) {
    for (let i of str) {
        if (i == ultimo) {
            qtd++
            if (qtd > maiorqtd) {
                maiorqtd = qtd
            }
        }
        else {
            ultimo = i
            
            qtd = 1
        }
    }
    console.log(maiorqtd)
}
lacuna(string);
