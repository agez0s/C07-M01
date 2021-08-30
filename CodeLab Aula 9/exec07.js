// EXERCÍCIO 7 - Criar uma função que receba como parâmetro um array de números e retorne um array contendo somente números positivos.


let array = [19, -35, 22, 13,-2, 10];
let arrayFinal = [];

for (let i of array) {
    if (i > 0) {
        arrayFinal.push(i);
    }
}
console.log(arrayFinal)
