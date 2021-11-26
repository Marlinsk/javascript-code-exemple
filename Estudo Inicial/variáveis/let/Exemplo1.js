let variavel1 = 'Primeira variável'; 
console.log(variavel1); // Imprimindo a variável no console 


variavel1 = 'Primeira variável atribuída'; // Retribuindo um outro valor à variável. 
console.log(variavel1);  


let variavel2 = ('Segunda variável atribuindo a ' + variavel1); // Não é 100% necessário usar '()'.    
console.log(variavel2); 


variavel2 = (variavel1 = 'Valor Alterado dentro da atribuição da variavel2');   
console.log(variavel2); 


variavel1 = 1 + 2; 
console.log(variavel1); // Imprimindo o resultado


variavel2 = 35;
let aux = (variavel1 + variavel2); // Soma
console.log(aux);


aux = ((variavel1 = 4) + (variavel2 = 5)); // Necessário utilizar '()' nesses casos.
console.log(aux);


variavel1 = 14
variavel2 = 67.9
aux = (variavel1 + variavel2); // Somando um valor 'int' com 'float'
console.log(aux)