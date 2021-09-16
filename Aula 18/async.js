const prompt = require('prompt-sync')();

function enviarEmail(corpo,para) {
    setTimeout(function() {
    console.log(`
    De: Eduardo
    Para: ${para}
    ------------------
    ${corpo}
    `)
    }, 5000)
    
}

enviarEmail("Esse é um email teste", "usuario@email.com")