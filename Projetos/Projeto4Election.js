const prompt = require('prompt-sync')();
/* PROJETO 4 - SIMULADOR DE VOTAÇÃO

A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no
módulo até este momento.
O programa tem que:
● Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)
● Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`,
"Opcional" ou "Obrigatório"; (2,0 pontos)
● Ter uma função chamada votacao(autorizacao, voto) que valida e contabiliza o voto
(número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não
possa ser contabilizado; (2,0 pontos)
● Contabilizar os votos de acordo com os significados (3,0 pontos):
● 1 = Candidato 1
● 2 = Candidato 2
● 3 = Candidato 3
● 4 = Voto Nulo
● 5 = Voto em Branco
● Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos)
● - O total de votos para cada candidato
● - O total de votos nulos
● - O total de votos em branco
● - Qual candidato venceu a votação */



//Declarando candidatos, votos nulos e brancos.
let candidatos = [
    { nome: "Zé da Silva", votos: 0},
    { nome: "Maria do Carmo", votos: 0},
    { nome: "Zezinho do Acordeão", votos: 0},
]
let nulos = 0
let brancos = 0

//inicia o programa
console.log("======================")    
console.log("= ELEIÇÕES BLUE 2021 =")
console.log("======================")    
console.log()
chamaVotacao();

//funcao para checar a idade

function autorizaVoto(anoNascimento) {
    let anoAtual = new Date().getFullYear();
    let i = anoAtual - anoNascimento
    if (i < 16) {
        return "Negado"
    }
    else if (i < 18 || i >= 65) {
        return "Opcional"
    }
    else {
        return "Obrigatório"
    }
}


//funcao da votacao em si

//votacao(auth, voto)
//auth obrigatorio opcional ou negado
//voto era o numero do voto
function votacao(autorizacao, voto) {
    if (autorizacao == "Negado") {
        console.log("Você não pode votar!")
    }
    //captura os votos nulos, para mostrar no final
    else if (voto < 0 || voto > 3) {
        console.log("Voto computado: nulo.")
        nulos++
    }
    //voto em branco é computado, mas não conta como voto válido. se votar em Branco, o +prompt retorna "0", então...
    else if (voto == 0) {
        console.log("Voto computado: em branco.")
        brancos++
    }
    else if (voto >= 1 && voto <=3) {
        candidatos[voto-1].votos++
        console.log(`Voto computado: ${candidatos[voto-1].nome}`)
    }
}

//exibe o resultado final da eleição
function exibirResultados() {
    console.log()
    console.log("======================")
    console.log("RESULTADO DAS ELEIÇÕES")
    console.log("======================")
    
    //declarando variável vazia, para poder apenas incrementar
    let votosValidos = 0 
    for (let i of candidatos) {
        votosValidos = votosValidos + i.votos
    }
    console.log(`Votos válidos: ${votosValidos}`)
    console.log(`Votos nulos: ${nulos} - Votos em branco: ${brancos}`)
    console.log("======================")
    //mostra quantos votos cada candidato obteve
    for (let i of candidatos) {
        console.log(`Candidato ${i.nome} obteve ${i.votos} votos.`)
    }
    //coloca o candidato com maior quantidade de votos no índice 0
    candidatos.sort((a, b) => b.votos - a.votos);
     //checa se houve um empate no final
   if (candidatos[0].votos == candidatos[1].votos) {
        console.log(`Não temos um vencedor nas eleições! Nos vemos no 2o turno`)
    }
    else {
        console.log(`${candidatos[0].nome.toUpperCase()} foi eleito com ${candidatos[0].votos} votos.`)
        console.log()
        
        //barrinha final
        for (let i of candidatos) {
        console.log(mostraBarra(i.votos, votosValidos, i.nome))
        }
    }

}


//função principal
function chamaVotacao(){
    let votar = prompt("Quer inserir um voto? (S/N) ")
    if (votar.toLowerCase() != "s") {
        exibirResultados();
    }
    else {
        let nasc = +prompt("Qual o seu ano de nascimento? ") // nasc = 2000
        let auth = autorizaVoto(nasc) //Negado, Obrigatório ou Opcional
        console.log()
        console.log("================")
        console.log("== CANDIDATOS ==")
        console.log("================")
        console.log()
        for (let i of candidatos) {
            console.log(`Para votar no candidato ${i.nome}, digite ${candidatos.indexOf(i) + 1}`)
        }
        console.log()
        let voto = +prompt("Qual candidato merece seu voto? ")
        votacao(auth, voto)
        chamaVotacao()        
    }
    
}


    
//PERFUMARIAS

//exibe uma barrinha com a % dos votos. recebe o número de votos, votos totais, e qual será a legenda da barra
function mostraBarra(votos,total,legenda) {
    let porcentagemInicial = votos/total*100
    //como vai dar um número muito alto, vou utilizar apenas 20 caracteres para a barra. então 100% seria 20 barras
    //divide a porcentagem por 5, pra definir o quanto vou encher a barra de 20 caracteres, e arredonda.
    porcentagem = Math.round(porcentagemInicial / 5)
    //quantos caracteres vou encher o resto da barra
    let restante = 20 - porcentagem
    //faz a string final, para concatenar
    let barraFinal = ""
    for (let i = 1; i <= porcentagem; i++) {
        barraFinal = barraFinal + "0"
    }
    for (let i = 1; i <= restante; i++) {
        barraFinal = barraFinal + "-"
    }
    //achei o código da porcentagem para 2 dígitos decimais na internet
    barraFinal = "[" + barraFinal + "] " + (Math.round(porcentagemInicial * 100) / 100).toFixed(2) + "% - " +legenda
    return barraFinal
}