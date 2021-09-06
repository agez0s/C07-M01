/* Utilizando  os  conceitos  aprendidos  até  objetos,  crie  um  programa  onde 
jogadores joguem um dado e tenham resultados aleatórios.
O programa tem que:
• Perguntar quantas rodadas você quer fazer; 
• Perguntar quantos jogadores vão jogar; 
• Criar um objeto pra cada jogador com nome e número tirado;
• Guarda todos os objetos em uma lista;
• Ordenar  esses  objetos,  sabendo  que  o  vencedor  tirou  o  maior  número 
no dado.
• Mostrar  no  final  qual  jogador  ganhou  mais  rodadas  e  foi  o  grande 
campeão. */

const prompt = require('prompt-sync')({sigint: true});
let jogadores = []



console.log("PROJETO 3 - JOGO DE DADOS");

//pergunta quantas rodadas serão jogadas
function askRodadas() {
    numRodadas = +prompt("Quantas rodadas você deseja jogar?")
    if (isNaN(numRodadas)) {
      console.log("Número de rodadas inválido!")
      askRodadas();
    }
}

//pergunta (e nomeia) quantos jogadores vão jogar
function askJogadores() {

  //reseta os jogadores (nome/vitórias) caso esteja jogando novamente
  jogadores = []

  numJogadores = +prompt("Quantos jogadores irão participar?")
  
  //se a resposta não for um número, retorna ao início
  if (isNaN(numJogadores)) {
    console.log("Número de jogadores inválido!")
    askJogadores();
  }
  else if (numJogadores == 1) {
    console.log("Você não pode jogar sozinho!")
    askJogadores();
  }

  for (let i = 0; i<numJogadores; i++) {
    //pega o nome do jogador
    let numeroJog = i+1
    let nomeJogador = prompt(`Qual o nome do ${numeroJog}o jogador?`)
    //coloca o nome em um novo objeto no array de jogadores, com vitórias zeradas
    jogadores.push({ nome: nomeJogador, vitorias: 0})
    console.log()
  }
}

function mainJogo() {
  

  //chama o número de rodadas/jogadores
  askRodadas();
  askJogadores();
  
    
  //loop principal
  for (let i = 1; i<=numRodadas; i++) {
    
    //variáveis que definem o maior valor obtido/quem ganhou na rodada. aqui estou zerando todo o início de rodada.
    let maiorDaRodada = 0
    let nomeGanhadorRodada
    //se for empate, deixa uma flag (1)
    let empate

    //jogada de cada jogador
    for (let i of jogadores) {
      i.rodada = (Math.floor(Math.random() * 6) + 1)
      //se a jogada for maior do que a maior já registrada, se torna a nova maior (ficou confuso? kkkk)
      if (i.rodada > maiorDaRodada) {
        maiorDaRodada = i.rodada
        nomeGanhadorRodada = i.nome
        empate = 0
      }
      else if (i.rodada == maiorDaRodada) {
        empate = 1
      }
    }

    //faz o sort, para mostrar o placar da rodada em ordem
    jogadores.sort(function (a, b) {
      return b.rodada - a.rodada;
    });
    console.log("=== PLACAR DA RODADA ===")
    console.log("========================")
    for (let i of jogadores) {
      console.log(`${i.nome} jogou o dado e tirou ${i.rodada}`)
    }


    //se não foi empate, incrementa a "vitorias" do jogador em questão
    if (empate == 0) {
      console.log(`Vencedor da rodada: ${nomeGanhadorRodada}, com ${maiorDaRodada}!`)
      
      //procura o nome do ganhador dentre os nomes, e incrementa sua vitória. entendi todo o conceito depois da aula 13!
      function mudaVitoria (vencedor) {
        for (let x in jogadores) {
          if (jogadores[x].nome == vencedor) {
            jogadores[x].vitorias++
          }
        }
      }
      mudaVitoria(nomeGanhadorRodada)
    }
    else if (empate == 1) {
      console.log(`Rodada empatada!`)
    }
    console.log(`${numRodadas-i} rodadas restantes!`);
    prompt("Pressione ENTER para continuar!")
    console.log()
  }
  FinalizaJogo();
}
  
//fim do jogo. score e pergunta se quer jogar novamente
function FinalizaJogo() {

  
  //coloca os jogadores com mais vitórias na frente da array de jogadores
  jogadores.sort((a, b) => b.vitorias - a.vitorias);
   console.log("=== PLACAR FINAL ===")
   console.log("====================")
   //imprime o placar completo, já ordenado
   for (let i of jogadores) {
     console.log(`${i.vitorias} - ${i.nome}`)
   }
   console.log()

   //checa se houve um empate no final
   if (jogadores[0].vitorias == jogadores[1].vitorias) {
     console.log(`Não temos um vencedor! Tivemos um empate, com alguns participantes obtendo ${jogadores[0].vitorias} vitórias!`)
   }
   else {
   console.log(`PARABÉNS ${jogadores[0].nome.toUpperCase()}!!! Você foi o campeão, com ${jogadores[0].vitorias} vitórias, ${jogadores[0].vitorias - jogadores[1].vitorias} a mais que o 2o colocado!`)
   }
  
  console.log()
  let reiniciar = prompt("Deseja jogar novamente?") 
  if ((reiniciar.toLowerCase() == "sim")) {
    mainJogo()
    }
  else {
      console.log("Então até a próxima!")
  }
}
  
//roda o jogo
mainJogo()