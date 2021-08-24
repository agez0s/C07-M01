/* Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
1. Telefonou para a vítima?
2. Esteve no local do crime?
3. Mora perto da vítima?
4. Devia para a vítima?
5. Já trabalhou com a vítima?

O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como Suspeita, entre 3 e 4 como Cúmplice e 5 como Assassino. Caso contrário, ele será classificado como Inocente. */


// declarando algumas variáveis e funções
let classificacao;
let respostas = 0;

let userNerv2 = `Dou uma respirada funda, tentando me manter calmo(a). Depois de uns 5 segundos, respondo:`;
let userNerv3 = `Sinto um frio na barriga. Mas tento me manter focado(a) e respondo:`;
let userNerv4 = `Estou suando, sei que a próxima resposta pode decidir o meu destino! Levanto a cabeça e respondo:`;

//"conserta" a resposta, e aumenta o contador em caso positivo
function trataResp(resposta) {
  resposta = resposta.toLowerCase();
if (resposta == "s" || resposta == "sim") {
  respostas++
}
}

//delegado nervoso
function delegado() {
  let nervoso2 = "Você percebe que o delegado fica um pouco inquieto, se balançando um pouco na cadeira.";
  let nervoso3 = "O delegado está suando mais que o normal, visivelmente inquieto.";
  let nervoso4 = "O delegado pega o chiclete de volta e volta a mascar (eca). Ele olha para o espelho, como se quisesse enviar uma mensagem";
if (respostas == 2) {
  console.log(nervoso2)
}
else if (respostas == 3) {
  console.log(nervoso3)
}
else if (respostas == 4) {
  console.log(nervoso4)  
}
else {
}
}

// início do programa
console.log("Projeto 1 - Detetive");
console.log();
console.log();
console.log(`===============================================`);
console.log()
console.log(`Você está em uma delegacia. Uma pessoa próxima a você foi assassinada, e após longas investigações, você se tornou um dos 4 principais suspeitos.`)
console.log(`Lhe colocaram em uma sala vazia. Apenas uma mesa com duas cadeiras. Um vidro espelhado à sua esquerda. "Vão me interrogar", você deduz.`);
console.log(`Após longos 20 minutos de espera, um homem alto entra na sala. Calmamente, se senta à sua frente enquanto arruma uns papéis em cima da mesa e inicia uma espécie de gravador. Tira um chiclete da boca e cola embaixo da mesa, e quebra o gelo:`);
console.log();

//Pega o nome do usuário
let nome = prompt("- Bom dia. Você poderia dizer o seu nome?");

//Transforma o nome para que seja apenas o primeiro, caso o usuário digite o nome completo ou algo parecido
if (nome.indexOf(` `) > 0) { 
  nome = nome.slice(0, nome.indexOf(` `))
}
console.log();

console.log(`- Muito bem, ${nome}. Como você sabe, estamos na fase final das investigações. Vou fazer 5 perguntas simples e diretas para você, e você só precisa responder com sim ou não.`);
console.log("Calmo(a), apenas balancei a cabeça de forma afirmativa.")

console.log();
console.log(`- Ok, pergunta número 1. Você telefonou para a vítima no dia do crime?`);
let resp = prompt("Não demorei muito e respondi:");

//chama a função para tratar a resposta e adicionar ao contador, se "sim"
trataResp(resp);

console.log();
console.log(`- Certo... e por acaso você esteve no local do crime?`);
resp = prompt(`Desta vez, demorei mais um pouco, mas respondi:`);

trataResp(resp);

console.log();

//deixa o delegado nervoso se a pessoa for suspeita.
delegado();

console.log("- Entendo. Você mora ou já morou perto da vítima?");

//aqui, deixa o usuário nervoso, caso esteja respondendo muito "sim"
if (respostas == 2) {
  resp = prompt(userNerv2);
}
else {
  resp = prompt(`Desta vez, a pergunta é mais fácil, e respondo mais rapidamente:`)
}

trataResp(resp);
console.log();

delegado();

console.log();
console.log(`- Certo ${nome}. Estamos quase no final... Financeiramente falando, você devia para a vítima?`);

//usuario nervoso
if (respostas == 2) {
  resp = prompt(userNerv2);
}
else if (respostas == 3) {
  resp = prompt(userNerv3)
}
else {
  resp = prompt(`Calmamente respondo:`)
}

trataResp(resp);
console.log();

delegado();

console.log();
console.log("- Ok... vamos para a última pergunta. Não foi tão ruim assim, não é? Você já trabalhou com a vítima?");

//usuario nervoso
if (respostas == 2) {
  resp = prompt(userNerv2);
}
else if (respostas == 3) {
  resp = prompt(userNerv3)
}
else if (respostas == 4) {
  resp = prompt(userNerv4)
}
else {
  resp = prompt(`Ainda bem que isto está acabando. Respondo rapidamente:`)
}

trataResp(resp);
console.log();

console.log();
console.log(`===============================================`);
console.log();
if (respostas == 2) {
  classificacao = "Suspeito"
  console.log(`O delegado se levanta. Me dá um papel e uma caneta e explica:`);
  console.log(`- Isso é um termo circunstancial. Pode ir para casa, mas você não deve deixar a cidade, pois ainda é considerado como um suspeito no caso. Em breve entraremos em contato com você.`);
  console.log("Saio dali meio atordoado(a), mas com o pensamento positivo de que o crime será resolvido.");
}
else if (respostas == 3 || respostas == 4) {
  classificacao = "Cúmplice"
  console.log(`O delegado respira fundo, e começa a falar calmamente.`); 
  console.log(`- Muito bem... temos provas suficientes para acreditar que você é no mínimo cúmplice deste assassinato. Espere mais um pouco aqui enquanto interrogamos outros suspeitos.`)
  console.log("E estou aqui, ainda na delegacia. Já se passaram horas e ninguém veio me interrogar. Será que esqueceram de mim?");
}
else if (respostas == 5) {
  classificacao = "Assassino";
  nome = nome.toUpperCase();
  console.log(`O delegado olha para o espelho. Após alguns segundos, 2 policiais entram na sala e lhe algemam. Você nem se debate, apenas chora e aceita o seu destino. Você está preso! Seu rosto está em todas as capas de jornal!`);
  console.log("_________________________");
  console.log("   ||   ||     ||   ||");
  console.log("   ||   ||, , ,||   ||");
  console.log(`   ||  (||/|/(\\||/  ||      PRESO ${nome},`);
  console.log("   ||  ||| _'_`|||  ||      ASSASSINO QUE VINHA");
  console.log("   ||   || o o ||   ||      APAVORANDO OS MORADORES");
  console.log("   ||  (||  - `||)  ||      DA REGIÃO!");
  console.log("   ||   ||  =  ||   ||");
  console.log("   ||   ||\\___/||   ||");
  console.log("   ||___||) , (||___||");
  console.log("  /||---||-\\_/-||---||\\");
  console.log(" / ||--_||_____||_--|| \\");
  console.log("(_(||)-| EX-BLUE |-(||)_)"); 
}
else {
  classificacao = "Inocente"
  console.log("O delegado sorri. Se levanta e estende a mão para mim.");
  console.log(`- Obrigado pela colaboração, ${nome}. Aparentemente você é inocente. Pode ir para a casa tranquilo. Agradecemos bastante sua vinda até aqui`);
  console.log(`Saio da delegacia tranquilo, e decido ir para casa andando. Paro em uma lanchonete e enquanto saboreio uma coxinha com Coca-cola, penso "Como é bom estar em liberdade"`);
}
console.log(`===============================================`);
console.log(`STATUS FINAL - JOGO DO DETETIVE`);
console.log(`Número de respostas "Sim": ${respostas}`);
console.log(`Classificação final: ${classificacao}`);