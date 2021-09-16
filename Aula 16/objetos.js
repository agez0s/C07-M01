const prompt = require(`prompt-sync`)();

let carro = {
    fabri: prompt("Qual a fabricante do carro?"),
    modelo: prompt("Qual o modelo?"),
    ano: +prompt("Qual o ano?"),
    dono: prompt("Quem é o dono do carro?"),
    vender: function () {
        let venda = prompt("Você quer vender o carro? S/N")
        if (venda.toUpperCase() == "S") {
            this.dono = prompt("Quem é o novo dono?")
            console.log(`O carro agora é de ${this.dono}`)
        }
        else {
            console.log(`Carro ainda pertence a ${this.dono}`)
        }
    }
}

console.log(carro)
carro.vender();
console.log(carro)



