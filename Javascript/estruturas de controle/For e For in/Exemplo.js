
console.log('Laço for');
// Exemplo de laço for
for (let i = 0; i <= 10; i++) {
    console.log(`i = ${i}`);
}

console.log('\nPercorrendo um array com laço for');
const valor = [67.5, 56, 24, 29.12, 101.2, 45, 7];
// Percorrendo um array com um laço for
for (i = 0; i < valor.length; i++) {
    console.log(`valor n = ${valor[i]}`);
}

console.log('\nLaço for in');

for (let i in valor) {
    console.log(i,'-',valor[i]);
}

console.log('\nPercorrendo um objeto com laço for in');

const animal = {
    nome: 'Tucano-toco',
    'espécie': 'Ramphastos toco',
    'família': 'Ramphastidae'
}

for (let atributo in animal){
    console.log(`${atributo}:${animal[atributo]}`);
}

console.log('\nFim!');