// Uma variável de tipo var, tem um escopo global, ou seja pode ser acessada globalmente e também reatribuir valor sem exclusividade de bloco

var variavel1 = 'Primeira variável'; // Declarando 
console.log(variavel1); // Imprimindo a variável no console  

// Obs: Na variável do tipo 'let', a forma de subscrever o valor é dessa forma, o 'var' quando está em um escopo global funciona assim também.
variavel1 = 'Primeira variável atribuída'; // Retribuindo um outro valor à variável.  
console.log(variavel1);  


var variavel2 = ('Segunda variável atribuindo a ' + variavel1); // Obs: Não é 100% necessário usar '()'.    
console.log(variavel2); 


var variavel2 = (variavel1 = 'Valor Alterado dentro da atribuição da variavel2');   
console.log(variavel2); 


var variavel1 = 1 + 2; 
console.log(variavel1); // Imprimindo o resultado


var variavel2 = 35;
var aux = (variavel1 + variavel2); // Soma
console.log(aux);


var aux = ((variavel1 = 4) + (variavel2 = 5)); // Obs: Necessário utilizar '()' nesses casos.
console.log(aux);


var variavel1 = 14
var variavel2 = 67.9
var aux = (variavel1 + variavel2); // Somando um valor 'int' com 'float'
console.log(aux);