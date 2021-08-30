// EXERCÍCIO 6 - Calcular a média de todos os números de um array.


let array = [19, 35, 22, 13,2, 10];
let soma = 0

for (let i of array) {
    console.log(soma)

    soma = soma + i
}
console.log(`Soma final: ${soma}`);
console.log(`Média vai ser: ${soma} / ${array.length}`);
console.log(`A média é ${soma/array.length}`);
