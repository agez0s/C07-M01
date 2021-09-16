// EXERCÍCIO 11 -  Criar uma função para inverter um array.

let array = ["Blue", "EdTech", "Reprograme", "seu", "lugar", "no", "mundo"]
let novaArray = []
console.log(array)
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    novaArray.unshift(array[i])
}
console.log(novaArray);