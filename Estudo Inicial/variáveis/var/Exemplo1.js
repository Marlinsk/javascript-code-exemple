var variavel1 = 'Primeira variável'; 
console.log(variavel1);  


variavel1 = 'Primeira variável atribuída'; // Na variável do tipo 'let', a forma de subscrever o valor é dessa forma, o 'var' quando está em um escopo global funciona assim também. 
console.log(variavel1);  


var variavel2 = ('Segunda variável atribuindo a ' + variavel1); // Não é 100% necessário usar '()'.    
console.log(variavel2); 


var variavel2 = (variavel1 = 'Valor Alterado dentro da atribuição da variavel2');   
console.log(variavel2); 


var variavel1 = 1 + 2; 
console.log(variavel1);


var variavel2 = 35;
var aux = (variavel1 + variavel2);
console.log(aux);


var aux = ((variavel1 = 4) + (variavel2 = 5)); // Necessário utilizar '()' nesses casos.
console.log(aux);


var variavel1 = 14
var variavel2 = 67.9
var aux = (variavel1 + variavel2);
console.log(aux)


var variavel3 = ' ' + 'Alguma coisa';
var aux = (variavel1 + variavel2 + variavel3);
console.log(aux);