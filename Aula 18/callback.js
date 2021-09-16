const prompt = require('prompt-sync')();

function enviarEmail(corpo,destinatario,callback) {
    setTimeout(function() {
    console.log(`
    De: Eduardo
    Para: ${destinatario}
    ------------------
    ${corpo}
    `);
    callback()

    }, 5000)
    
}

enviarEmail("Esse é um email teste", "usuario@email.com", 
    function() {
        console.log("Seu email foi enviado!")
    }
    )