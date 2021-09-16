// EXERCÍCIO 3 -  Imprimir todas as tabuadas do número 1 ao 10.


for (let i = 0; i <= 10; i++) {
    console.log(`Tabuada do ${i}`)
    for (let x = 0; x <= 10; x++) {
        console.log(`${i} vezes ${x} = ${i*x}`);
    }
}