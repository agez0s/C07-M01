const { reject } = require('async');

const prompt = require('prompt-sync')();

function baixarPlanilha (url, nome){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let deucerto = true;
            if (deucerto == true){
                resolve();
            }
            else {
                reject();
            }
        }, 3000)
    }
    )
}


baixarPlanilha("www.planilhas.com", "pagamentos")
    .then(function(){
        console.log(`Deu certo!`)
    })
    .catch(function(){
        console.log("Deu erro mano")
    });

