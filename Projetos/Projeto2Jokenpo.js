/* Projeto 02 – Jogo Jokenpô   
 
Utilizando os conceitos aprendidos até estruturas de repetição, crie um 
programa que jogue pedra, papel e tesoura (Jokenpô) com você. 
 
O programa tem que: 
 
• Permitir que eu decida quantas rodadas iremos fazer; 
• Ler a minha escolha (Pedra, papel ou tesoura); 
• Decidir de forma aleatória a decisão do computador; 
• Mostrar quantas rodadas cada jogador ganhou; 
• Determinar quem foi o grande campeão de acordo com a quantidade de 
vitórias de cada um (computador e jogador); 
• Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha 
de quantidade de rodadas, se não finalize o programa. */

//declarando algumas variáveis
const prompt = require('prompt-sync')({sigint: true});
let jogadaPC
let jogadaUser
let rodadasWin = 0;
let rodadasDraw = 0;
let rodadasLose = 0;

//jogada aleatória do computador
function JogadaComp() {
  let jogadaComp = Math.floor(Math.random()*3);
  return jogadaComp;
 }

//recebe o input do jogador e transforma em numeral, para posterior comparação
function trataJogada() {
  jogada = prompt(`Escolha pedra, papel ou tesoura:`);
  if ((jogada.toLowerCase() == "pedra")) {
    return 1;
  }
  else if ((jogada.toLowerCase() == "papel")) {
    return 2;
  }
  else if ((jogada.toLowerCase() == "tesoura")) {
    return 3;
  }
  
  //gambiarra porque não consegui chamar a função novamente :|
  else { 
    console.log("Opção indisponível! Você perdeu um ponto!") 
    rodadasLose++;
  }
}

//início do programa
console.log("Projeto #2 - Jokenpô");
console.log("====================");
console.log();

let nome = prompt("Bem vindo! Qual o seu nome?");
let numRodadas = 0;


//pergunta o número de rodadas. muda o texto se não é a primeira vez que está jogando
function askRodadas(deNovo) {
  if (deNovo === 1) {
  numRodadas = +prompt("Vamos jogar novamente então! Quantas rodadas desta vez?")
  }
  else {
    numRodadas = +prompt("Quantas rodadas você deseja jogar?")
  }
  if (isNaN(numRodadas)) {
    console.log("Número de rodadas inválido!")
    askRodadas();
  }
}


//resultado de cada rodada, com contador para o score
function FimRodada(resultado) {
  if (resultado == 1) {
    console.log(`Você ganhou essa rodada!`);
    rodadasWin++
  }
  else if (resultado == 2) {
    console.log(`Você perdeu essa rodada!`)
    rodadasLose++
  }
  else if (resultado == 3) {
    console.log(`Empate!`)
    rodadasDraw++
  }
  console.log()
}

//function principal
function mainJogo(deNovo) {
  
  //se não é a primeira vez que joga, chama a função com o argumento
  if (deNovo === 1) {
    askRodadas(1);
  }
  else { 
    askRodadas();
  }
  
  //loop principal
  for (let i = 1; i<=numRodadas; i++) {
    jogadaPC = JogadaComp();
    let jogada = trataJogada();
    if (jogada == 1) {
     console.log(`Você escolheu: Pedra`)
     if (jogadaPC == 0) {
      console.log(`Eu escolhi: Pedra`)
      FimRodada(3);
     }
     else if (jogadaPC == 1) {
     console.log(`Eu escolhi: Papel :)`)
     FimRodada(2)
     }
     else if (jogadaPC == 2) {
     console.log(`Eu escolhi: Tesoura :(`)
     FimRodada(1)
     }
    }
    else if (jogada == 2) {
    console.log(`Você escolheu: Papel`)
     if (jogadaPC == 0) {
      console.log(`Eu escolhi: Pedra :(`)
      FimRodada(1);
     }
     else if (jogadaPC == 1) {
     console.log(`Eu escolhi: Papel`)
     FimRodada(3)
     }
     else if (jogadaPC == 2) {
     console.log(`Eu escolhi: Tesoura :)`)
     FimRodada(2)
     }
    }
    else if (jogada == 3) {
    console.log(`Você escolheu: Tesoura`)
     if (jogadaPC == 0) {
      console.log(`Eu escolhi: Pedra :)`)
      FimRodada(2);
     }
     else if (jogadaPC == 1) {
     console.log(`Eu escolhi: Papel :(`)
     FimRodada(1)
     }
     else if (jogadaPC == 2) {
     console.log(`Eu escolhi: Tesoura`);
     FimRodada(3);
     }
    }
    console.log(`${numRodadas-i} rodadas restantes!`);
  }
  FinalizaJogo();
}


//fim do jogo. score e pergunta se quer jogar novamente
function FinalizaJogo() {
  let rodadasTotal = rodadasWin + rodadasLose + rodadasDraw;
  console.log(`Fim do jogo após ${rodadasTotal} rodadas!`)
  console.log(`Sua pontuação: ${rodadasWin}`)
  console.log(`Minha pontuação: ${rodadasLose}`)
  console.log(`Empates: ${rodadasDraw}`)
  console.log("=================================")
  if (rodadasWin > rodadasLose) {
    console.log("Você foi o grande vencedor!");
  }
  else if (rodadasLose > rodadasWin) {
    console.log("Eu ganhei!")
  }
  else {
    console.log(`Após ${rodadasTotal} rodadas, terminamos no empate!`);
  }
  let reiniciar = prompt("Deseja jogar novamente?") 
  if ((reiniciar.toLowerCase() == "sim")) {
  //zera os contadores de vitórias e chama a função novamente, com a flag 1
    rodadasWin = 0;
    rodadasLose= 0;
    rodadasDraw = 0;
    mainJogo(1)
  }
  else {
    console.log("Então até a próxima!")
  }
}


//roda o jogo
mainJogo()