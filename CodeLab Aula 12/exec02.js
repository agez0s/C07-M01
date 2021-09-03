/* EXERCÍCIO 2 - Crie um programa que leia o preço e a quantidade de um produto a ser comprado, calculando o total da compra, 
guarde essas informações em um objeto. Se o valor total da compra for maior que R$ 100,00 de o desconto de 10%, 
se for entre R$ 400,00 e R$ 500,00, dê 15% de desconto, se for acima de R$ 500,00, dê 20% de desconto. 
No final mostre ao cliente a quantidade, o preço do produto e o valor total de sua compra, considerando o desconto dado. 
Não se esqueça de alterar o valor total no objeto.  */

const prompt = require(`prompt-sync`)();

let produto = {}

produto.preco = prompt("Qual o preço do produto? ")
produto.quant = prompt("Quantas unidades você quer comprar? ")

produto.total = produto.preco * produto.quant

if (produto.total > 500) {
    produto.total = produto.total * 0.8
}
else if (produto.total > 400) {
    produto.total = produto.total * 0.85
}
else if (produto.total > 100) {
    produto.total = produto.total * 0.9
}
console.log(produto)