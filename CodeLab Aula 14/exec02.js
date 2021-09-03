/* EXERCICIO 2 - Vamos criar um script que pede uma senha ao usuário.
Se a senha estiver correta, ele entra no sistema.
Se estiver errada, avisa e pede a senha novamente. */

const prompt = require('prompt-sync')();

let senha = "123"

function checaSenha(inputsenha) {
    if (inputsenha != senha) {
        console.log("Senha incorreta!")
        pedeSenha();
    }
    else if (inputsenha == senha) {
        console.log("Senha correta! Bem vindo")
    }
}

function pedeSenha() {
    let i = prompt("Digite a senha: ");
    checaSenha(i);
}

pedeSenha();