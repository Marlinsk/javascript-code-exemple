const fabricantes = ['Mercedes', 'Audi', 'Tesla', 'Porsche', 'Lamborghini', 'Ford', 'Ferrari'];

console.log('Exemplo 1:');

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome};`);
}

fabricantes.forEach(imprimir);


console.log('\nExemplo 2:');

/*
fabricantes.forEach(function(fabricante) { 
    console.log(fabricante);
})
*/

fabricantes.forEach((fabricante) => console.log(fabricante));
