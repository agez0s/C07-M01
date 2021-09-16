const prompt = require(`prompt-sync`)();
/* O que é ficção interativa?
Ficção interativa, geralmente abreviada como IF, é um software de emulação de
ambientes no qual os jogadores usam comandos de texto para controlar
personagens do jogo e influenciar o ambiente.

Escopo do projeto
Crie um jogo de ficção interativa que simule a rotina
diária de um personagem. Você pode escolher entre rotinas matinais, rotinas de
trabalho, rotinas de estudos, entre outras. A ideia do jogo é que o jogador faça
as escolhas para o seu personagem e o conduza durante o seu dia.
Cada escolha irá gerar uma consequência diferente para o seu personagem.
Você será responsável por determinar o inicio e término do dia do seu
personagem, além de avançar o tempo a cada escolha.
É obrigatório o uso de orientação a objetos e herança, funções, laços (while/for)
e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.
Use toda sua criatividade para desenvolver uma história interessante e seja bem
específico com relação as escolhas que precisam ser feitas, para que seu jogo
seja divertido! */


/* !!! ATENÇÃO, AS LINHAS ABAIXO CONTÉM SPOILERS !!!
SE PREFERIR JOGAR PRIMEIRO, MELHOR NÃO LER KKKKKKK
NO FINAL DO CÓDIGO TEM O OBJETIVO DO JOGO. DEIXEI NO FINAL PQ É SEMI-SPOILER!
 */

//usar umas constantes pra escalar melhor o jogo, e porque nunca usei kkkk
//e foi muito útil para testar o jogo!
const PROB_EVENTO = 0.60
//se for true, o personagem não pode morrer de fome/sede/saúde. usei para testar o jogo sem morrer
const INVENCIVEL = false


class Objeto {
    constructor(nome) {
        this.nome = nome
        }
}

class Comida extends Objeto {
    constructor(nome,fazmal){
        super(nome)
        //se faz mal, tira um pouco da saúde
        this.fazmal = fazmal
    }
}


//eventos que podem ocorrer
let eventos = {
    helicoptero: function() {
        console.log("Você escuta um barulho distante... chegando cada vez mais perto.")
        console.log("O barulho está muito perto, e agora você consegue distinguir o som. É um helicóptero!")
        console.log("Você começa a gritar e jogar pedras para o alto...")
        prompt(textos.enter)
        //se estiver com a fogueira acesa, o jogo acaba
        if (infos.fogueira) {
            console.log(`... e aparentemente eles estão retornando! Devem ter visto a fumaça de sua fogueira! Você está salvo, depois de ${infos.dia} dias.`)
            console.log(`Jogam uma escada para você, e com suas últimas forças, você consegue subir até o helicóptero.`)
            console.log("Ao chegar no helicóptero, o piloto olha pra você e começa a gritar algo, mas você não escuta nada.")
            console.log("Você percebe que o piloto do helicóptero é Zezinho! E você começa a escutar, bem distante, os gritos dele.")
            console.log("- Patrão! Patrão! Acorda! Você tá bem??")
            console.log("Você acorda assustado, derrubando seu copo de cachaça. Foi tudo um sonho...")
            prompt(textos.enter)
            finalizaJogo()
        }
        else {
            console.log("...mas não é o suficiente... e você vê a sua chance de resgate ir embora")
            mainJogo()
        }
    },
    encontroAnimal: function() {
        console.log("Você encontrou um coelho selvagem!")
        console.log("Você começa a perseguir o pobre animal...")
        prompt(textos.enter)
        let tempoCaminhada = calcTempo(10,30)
        passaTempo(tempoCaminhada);
        sede(-10);
        fome(-10)
        //se tiver a faca, não perde saúde
        if (infos.items.find(x => x.nome == "Faca") != undefined) {
            console.log("... e com a ajuda de sua faca, consegue capturá-lo facilmente!")
        }
        else {
            console.log("... e depois de muita correria, dentadas e mordidas dele, você consegue capturá-lo!")
            infos.perderHp(10)
        }
        infos.addItem("Carne crua")
        mainJogo()
    },
    acharCasa: function() {
        console.log("Você escuta um som de água correndo ao fundo... seria um rio??")
        console.log("Você tenta seguir em direção ao som, que vai ficando cada vez mais perto...")
        prompt(textos.enter)
        console.log("... até que encontra um rio! Agora você pode matar a sede à vontade!")
        infos.sede = 100;
        console.log("Você continua seguindo pela orla do rio, na esperança de encontrar alguém")
        prompt(textos.enter)
        console.log("Depois de andar por cerca de 50 minutos, você encontra uma cabana!")
        console.log("Você dá uma olhada na cabana. Só tem alguns utensílios de cozinha antigos. Parece que está abandonada faz muito tempo. Você procura algo que possa ser útil e acha uma faca. Não está muito amolada, mas dá pro gasto...")
        console.log("== Item adicionado: Faca ==")
        console.log("== Você pode beber água à vontade agora ==")
        prompt(textos.enter)
        infos.addItem("Faca")
        passaTempo(50);
        infos.casa = true
        mainJogo()
    },
    lista: []
}

//vou usar esses bastante, então vou diminuir meu trabalho. criei um objeto para ficar mais organizado
let textos = {
    linhaDivisoria: "=========================================",
    enter: "Pressione ENTER para continuar..."
}

//classe do personagem
class Principal {
    constructor(items,saude,fome,sede,dia,hora,minuto,casa,fogueira,menu) {
    this.items = items
    this.saude = saude
    this.fome = fome
    this.sede = sede
    this.dia = dia
    this.hora = hora
    this.minuto = minuto
    this.casa = casa
    this.fogueira = fogueira
    this.menu = menu
    }
}

//cria o personagem
let infos = new Principal([],100,100,100,1,11,27,false,false,[])

//não soube colocar esses na classe :(
infos.nomeFrutas = ["Caju", "Manga", "Mamão", "Jaca"]
infos.frutaAleatoria = function() {
    let x = Math.floor(Math.random() * this.nomeFrutas.length);
        return this.nomeFrutas[x]
    }
infos.perderHp = function(qtd) {
        this.saude = this.saude - qtd
}
infos.addItem = function(item) {
        if (item != "Carne crua" || item != "Fruta") {
            this.items.push(new Objeto(item))
        }
        else {
            if (item != "Fruta") {
                this.items.push(new Comida(item,true))
            }
        }
}

console.log(infos)
//início
console.log(textos.linhaDivisoria)
console.log("===== PROJETO 5 - FICÇÃO INTERATIVA =====")
console.log(textos.linhaDivisoria)
console.log()

console.log("Você está na pele de João da Silva, famoso comediante brasileiro. Sua vida é corrida: vários shows por dia, sete dias por semana. Mal sobra tempo para nada. Para tornar isso possível, você tem seu próprio helicóptero particular, que depois de anos de utilização desenfreada, começou a demonstrar sinais do tempo...")
console.log("Depois de mais uma noite divertida, você sobe em seu helicóptero com destino ao próximo show. São 4:30 da manhã. Você toma um gole de cachaça mineira e imediatamente cai no sono, extremamente cansado.")
console.log()
prompt(textos.enter)
console.log()
console.log(`... Você acorda assustado. O helicóptero está chacoalhando bastante. O piloto exclama: "Jãozin, tamo caindo!" Você olha para a janela, vê as árvores cada vez mais próximas!`)
console.log(`"Jãozin, é melhor tu pular! A gente vai cair!" fala o piloto. Você pega um para-quedas e joga o outro para o piloto: "Vamo home! Solte esse negócio aí e pule comigo!"`)
console.log(`"Pule aí que eu vou logo atrás de você!" grita o piloto, já desesperado. Você nem pensa duas vezes e pula do helicóptero...`)
console.log()
prompt(textos.enter)
console.log()
console.log(textos.linhaDivisoria)
console.log(`Enquanto flutua com a ajuda do para-quedas, você observa o helicóptero indo embora enquanto solta muita fumaça, até que ele explode em uma bola de fogo monumental. "Zezinho! Nãooo!" você grita. Era seu amigo de longa data. Enquanto chora, você vai caindo lentamente na floresta, e é atingido violentamente por um galho de árvore, perdendo a consciência...`)
console.log()
prompt(textos.enter)
console.log()
console.log(`Você acorda. Meio zonzo, olha pra cima e só vê as árvores altas e seu para-quedas rasgado. Você caiu de uma altura considerável. O sol está forte. Você catuca os bolsos, e acha seu isqueiro e um celular, sem sinal algum. O relógio marca 11:27 da manhã. Você começa a se recompor.`)
console.log()
prompt(textos.enter)
console.log()
infos.addItem("Celular")
infos.addItem("Isqueiro")
mainJogo()

//funcao principal, chamada várias vezes
function mainJogo(){
    console.log(textos.linhaDivisoria)
    //se tiver morto, já finaliza o jogo
    checaSaude();
    if (infos.hora > 17) {
        console.log("Está anoitecendo... melhor parar por hoje e continuar amanhã.")
        prompt(textos.enter)
        infos.hora = 9
        //não mexo nos minutos, para parecer que foi algo aleatório (vai herdar o horário do dia anterior)
        infos.dia++
        //apaga a fogueira
        if (infos.fogueira) {
            infos.fogueira = false
            console.log("Você acorda na manhã seguinte, revigorado. Sua fogueira apagou durante a noite.")
        }
        else {
            console.log("Você acorda na manhã seguinte, revigorado. Vamos para outro dia!")
        }
    }
    console.log(textos.linhaDivisoria)
    status()
    console.log("O que deseja fazer?")
    console.log()
    menu()
}

//status do jogo
function status(){
    console.log(`Dia: ${infos.dia} - Hora: ${infos.hora}:${infos.minuto} - Vida: ${infos.saude} - Fome: ${fome("status")} - Sede: ${sede("status")}`)

}

//funcoes de fome e sede. 
function fome(arg){
    //retorna o status da fome/sede. se o argumento for um número, modifica
    if (arg == "status") {
        if (infos.fome >= 80) {
            return "saciado"
        }
        else if (infos.fome >=60) {
            return "fominha"
        }
        else if (infos.fome >=40) {
            return "bastante"
        }
        else { return "muita fome" }
    }
    else {
        infos.fome = infos.fome + arg
    }
}

function sede(arg){
    if (arg == "status") {
        if (infos.sede >= 80) {
            return "saciado"
        }
        else if (infos.sede >=60) {
            return "pouca sede"
        }
        else if (infos.sede >=40) {
            return "bastante sede"
        }
        else { return "muita sede" }
    }
    else {
        infos.sede = infos.sede + arg
        
    }
}

//funcao que dá dano no personagem caso tenha fome/sede por muito tempo, podendo matar
function checaSaude() {
    if (infos.sede <= 0) {
        infos.perderHp(10)
        console.log("=== VOCÊ PERDEU SAÚDE PORQUE CONTINUA COM SEDE!")
        prompt(textos.enter)
    }
    if (infos.fome <= 0) {
        infos.perderHp(10)
        console.log("=== VOCÊ PERDEU SAÚDE PORQUE CONTINUA COM FOME!")
        prompt(textos.enter)
    }
    if (!INVENCIVEL) {
        if (infos.saude <= 0) {
            mataPersonagem()
        }
    }
}

function mataPersonagem() {
    prompt(textos.enter)
    console.log(textos.linhaDivisoria)
    console.log("=== Sua saúde chegou a zero! Game over! ===")
    console.log(textos.linhaDivisoria)
    process.exit(0)
    
}

//menu. bem estranho mas funcionou
function menu(){
    while (true) {
    //primeiro ele "reseta" o menu..
    infos.menu = []
    //pra depois ir adicionando as opções. essas duas sempre são chamadas.
    infos.menu.push("Explorar", "Usar items")

    //essas outras, só quando certas partes do jogo estão destravadas
    if (infos.casa){
        infos.menu.push("Beber água", "Procurar comida")
    }
    if (infos.casa && infos.fogueira == false) {
        infos.menu.push("Acender fogueira")
    }
    infos.menu.push("Sair do jogo")
    //pra cada item do menu, mostra na tela com o número da opção. gambiarra para transformar 0 em 1
    for (let i in infos.menu) {
        let x = parseInt(i) + 1
        console.log(`${x} - ${infos.menu[i]}`)
    }
    console.log()
    let escolha = +prompt(">")

    //para ficar igual ao índice da lista
    escolha--
    if (escolha < 0 || escolha > infos.items.length) {
        console.log("-- Opção incorreta")
        menu();
    }
    
    //funcoes para cada escolha
    if (infos.menu[escolha] == "Explorar") {
        explorar()
    }
    else if (infos.menu[escolha] == "Beber água") {
        beberAgua();
    }
    else if (infos.menu[escolha] == "Usar items") {
        usarItems()       
    }
    else if (infos.menu[escolha] == "Procurar comida") {
        procurarComida();
    }
    else if (infos.menu[escolha] == "Acender fogueira") {
        acenderFogueira();
    }
    else if (infos.menu[escolha] == "Sair do jogo") {
        //achei na net, pra encerrar um script do node!
        process.exit(0)
    }
}
}


//funcao para procurar comida
function procurarComida() {
    console.log()
    console.log("Você pega sua faca, enche o cantil de água e sai pra procurar o que comer... saudade do iFood?")
    prompt(textos.enter)

    //pode ocorrer de achar frutas, achar caça, ou não achar nada
    let x = Math.random()
    if (x < 0.33) {
        //fruta
        let tempoCaminhada = calcTempo(10,30)
        let f = infos.frutaAleatoria()
        console.log(`Após caminhar por ${tempoCaminhada} minutos, você encontrou um pé de ${f.toLowerCase()}!`)
        console.log("Depois de descobrir que você não é um exímio catador de frutas, você consegue matar a fome e leva alguns frutos para casa")
        prompt(textos.enter)
        infos.addItem(f)
        infos.fome = 100
        sede(-10);
        passaTempo(tempoCaminhada);
        mainJogo();

    }
    else if (x < 0.66) {
        //caça
        eventos.encontroAnimal()
    }
    else {
        //nada
        let tempoCaminhada = calcTempo(20,40)
        console.log(`Após caminhar por ${tempoCaminhada} minutos, você não encontrou nada para comer... e só fez ficar com mais fome e sede`)
        fome(-10);
        sede(-10);
        passaTempo(tempoCaminhada);
        mainJogo();

    }
}


function explorar(){
    console.log(textos.linhaDivisoria)
    console.log("Você começa a explorar um pouco os arredores...")
    
    //roda um dado para ver se vai acontecer algum evento aleatório que pode mudar o rumo do jogo
    let evento = Math.random();
    if (evento >= PROB_EVENTO) { rodaEvento()}
    else {
        let tempoCaminhada = calcTempo(20,40)
        console.log(`Após caminhar por ${tempoCaminhada} minutos, você não encontrou nada de novo.`)
        fome(-10);
        sede(-10);
        passaTempo(tempoCaminhada);
        mainJogo();
        }
}

//retorna um numero aleatorio. usado nas caminhadas, para não ficar um valor fixo
function calcTempo(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//funcao pra passar o tempo, com gambiarras pq não consegui usar o Date()
function passaTempo(arg) {
    infos.minuto = parseInt(infos.minuto)
    infos.minuto += arg
    if (infos.minuto >= 60) {
        infos.hora++
        infos.minuto -= 60
        if (infos.minuto < 10) {
            infos.minuto = "0" + infos.minuto
        }
    }
}

//mesmo pensamento do menu, mas para eventos
function rodaEvento(){
    eventos.lista = []
    eventos.lista.push("Heli", "Animal")

    if (!infos.casa){
        //coloquei 3 vezes pra aumentar a probabilidade de achar a casa no início do jogo
        eventos.lista.push("Achar casa")
        eventos.lista.push("Achar casa")
        eventos.lista.push("Achar casa")
    }

    let tamanhoLista = eventos.lista.length
    let x = Math.floor(Math.random() * tamanhoLista)
    if (eventos.lista[x] == "Heli") {
        eventos.helicoptero();
    }
    else if (eventos.lista[x] == "Animal") {
        eventos.encontroAnimal();
    }
    else if(eventos.lista[x] == "Achar casa") {
        eventos.acharCasa()
    }
}

//acende a fogueira
function acenderFogueira() {
    console.log(`Depois de 10 minutinhos, você acende uma fogueira. Agora pode assar carne!`)
    infos.fogueira = true;
    fome(-10);
    sede(-10);
    passaTempo(10);
    mainJogo();    
}

//bebe agua do rio
function beberAgua() {
    console.log("Você vai até o rio e mata sua sede")
    prompt(textos.enter)
    infos.sede = 100
    mainJogo()
}

//final do jogo. deixei aqui pra evitar spoiler!
function finalizaJogo() {
    console.log("                                                   vv")
    console.log("     ~~                 -----|-----      ~~")
    console.log("       ~~            *>=====[_]L)                           ~~")
    console.log("  v                       -'-`-        ~~")
    console.log() 
    console.log(`    Você olha para a floresta abaixo... e começa a rir. "Toca pra próxima cidade, Zezinho!"`) 
    console.log()
    console.log(" ^  ^  ^   ^      ___I_      ^  ^   ^  ^  ^   ^  ^")
    console.log("/|\\/|\\/|\\ /|\\    /\\-_--\\    /|\\/|\\ /|\\/|\\/|\\ /|\\/|\\  /|\\/|\\ /|\\/|\\/|\\ /|\\/|\\")
    console.log("/|\\/|\\/|\\ /|\\   /  \\_-__\\   /|\\/|\\ /|\\/|\\/|\\ /|\\/|\\  /|\\/|\\ /|\\/|\\/|\\ /|\\/|\\")
    console.log("/|\\/|\\/|\\ /|\\   |[]| [] |   /|\\/|\\ /|\\/|\\/|\\ /|\\/|\\  /|\\/|\\ /|\\/|\\/|\\ /|\\/|\\")
    console.log(textos.linhaDivisoria)
    process.exit(0)
}

//chama um menu para usar os items
function usarItems() {
    console.log(textos.linhaDivisoria)
    console.log("=== SEUS ITEMS ===")
    console.log(textos.linhaDivisoria)
    for (let i in infos.items) {
        let x = parseInt(i) + 1
            console.log(`${x} - ${infos.items[i].nome}`)
    }
    console.log("Qual você quer usar?")
    let usar = +prompt(">")
    usar--
    if (usar < 0 || infos.items[usar] == undefined) {
        console.log("-- Opção incorreta")
        usarItems();
    }
    usar = infos.items[usar].nome
    if (usar == "Celular") {
        console.log("Seu celular não tem sinal... melhor deixar no modo avião e economia de bateria, só para checar a hora")
        console.log(`O relógio marca ${infos.hora}:${infos.minuto}`)
        prompt(textos.enter)
        mainJogo()
    }
    else if (usar == "Isqueiro") {
        console.log("Você bem que queria fumar... mas sua carteira de cigarros ficou no helicóptero...")
        if (infos.casa) {
            console.log("Pelo menos dá pra acender a fogueira com ele")
        }
        prompt(textos.enter)
        mainJogo();
    }
    else if (usar == "Faca") {
        console.log("Você contempla a faca que achou na casa... apesar de ser antiga, está quebrando um galho enorme")
        console.log("Ela lhe é bastante útil para caçar e tirar frutas do pé.")
        prompt(textos.enter)
        mainJogo();
    }
    else if (usar == "Carne crua") {
        if (infos.fogueira) {
            infos.fome = 100
            console.log("Depois de tratar a carne do jeito que dá, você arma uma churrasqueira rústica usando sua fogueira")
            console.log("Um churrasquinho para matar a fome... nada mal. Só faltou a cerveja!")
            console.log("=== VOCÊ ESTÁ SACIADO ===")
            passaTempo(40)
            prompt(textos.enter)
            mainJogo()
        }
        else {
            console.log("Você trata a carne do jeito que dá... para tentar matar a fome de qualquer jeito")
            console.log("Mas se o povo come peixe cru, porque não carne crua?")
            console.log("=== VOCÊ ESTÁ SACIADO (de certa forma) ===")
            infos.fome = 100
            infos.perderHp(20)
            prompt(textos.enter)
            console.log("Você passa um pouco mal... mas é o que tem pra hoje.")
            prompt(textos.enter)
            mainJogo()
        }
    }
    else {
        console.log(`Você começa a comer... rapaz, essa ${usar} tá bem docinha!`)
        console.log("Ou seria a fome que deixa tudo gostoso?")
        infos.fome = 100
        prompt(textos.enter)
        mainJogo();    
    }
 
}

/* Admito que não é muito intuitivo. O jogo termina quando você consegue achar a casa (explorando),
podendo assim acender a fogueira. Depois que a fogueira está acesa, você deve explorar até encontrar
um helicóptero e ele avistar a fumaça. Tem que ficar sempre de olho na vida/fome/sede! */