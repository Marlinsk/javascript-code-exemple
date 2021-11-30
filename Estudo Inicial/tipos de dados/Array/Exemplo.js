const array = ['Andorinha', 'Baleia-Jubarte', 'Camaleão', 'Elefante-Africano', 'Gorila', 'Mico-Leão-Dourado'];

console.log(array);
console.log(array[2]);
console.log('Tamanho do array: ',array.length);

array.push([2, 37, 48, 11, 90, 127, 30, 12, 57, 66, 101], null, true); // Possibilita incrementar múltiplos valores dentro do array existente. 
console.log(array);

console.log(array.pop()); // retira o último elemento do array.

delete array[4]; // Deleta o valor do índice.
console.log(array); 