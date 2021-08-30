// EXERCÍCIO 8 - Localizar o maior valor dentro de um array de números.


let array = [19, -35, 22, 13,-2, 10];

let maior = 0

for (let i of array) {
    if (i > maior) {
        maior = i
    }
}
console.log(`Array: ${array}`)
console.log(`Maior número = ${maior}`)