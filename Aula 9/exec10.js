// EXERCÍCIO 10 - Retornar a maior string de um array.

let array = ["Blue", "EdTech", "Reprograme", "seu", "lugar", "no", "mundo"]
let maiorStr = 0
for (let i = 0; i < array.length; i++) {
    if (array[i].length > array[maiorStr].length) {
         maiorStr = i
     }
}
console.log(`A maior string é: ${array[maiorStr]}, que está no índice ${maiorStr}`);

