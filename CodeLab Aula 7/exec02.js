// Criar uma função que junte dois arrays e retorne o resultado como um novo arrays

let array1 = ["Blue ", "Green ", "Red "];
let array2 = ["EdTech", "Peace", "Hot Chilli Peppers"];
let arrayFinal = [];

for (let obj of array1) {
  arrayFinal.push(obj);
}

for (let obj of array2) {
  arrayFinal.push(obj);
}
console.log(arrayFinal)
