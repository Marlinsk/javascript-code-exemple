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

teste();

