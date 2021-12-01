function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor) 
}

let opcao = 0;

console.log('Estrutura de repetição while: ');

// Exemplo de uma estrutura while
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 12);
    console.log(`O número gerado foi ${opcao};`);
}
 
console.log('\nEstrutura de repetição do while: ');

// Exemplo de uma estrutura do while
do {
    opcao = getInteiroAleatorioEntre(-1, 12);
    console.log(`O número gerado foi ${opcao};`);
} while (opcao != -1) 

console.log('\nFim!');