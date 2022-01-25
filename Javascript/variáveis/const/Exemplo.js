/* 
  As variáveis do tipo 'const' não podem ser retribuídas, ou seja, não podemos atribuir um novo valor a variável criada, 
  diferentemente das variáveis do tipo 'let' e 'var', onde o seu valor pode ser retribuído mudando assim o dado que aquela 
  variável armazena.
*/ 

const variavel1 = 'Primeira variável'; 
console.log(variavel1);  


// Teste de exclusividade.
const variavel2 = 500;

{
    const variavel2 = 5;
    console.log('Dentro=',variavel2);
}

console.log('Fora=', variavel2);

function teste(){
    const variavel2 = 'variável local';
    console.log('Function=', variavel2);
}

teste(); // Imprimindo a variável no console através de uma function