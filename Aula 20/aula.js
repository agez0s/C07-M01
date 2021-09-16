const prompt = require('prompt-sync')();

function enviarArquivo(arquivo, destino){
    return new Promise((resolve, reject) => { 
        setTimeout(function() { 
            if (deucerto == true) {
                resolve()
            } else {
                reject()
            }

        }, 3000)
    })
}

enviarArquivo("Projeto1.js", "Classroom").then(function() { 
        console.log("O arquivo foi enviado")
    }).catch(function(){
        console.log("O envio falhou")
    })
    
