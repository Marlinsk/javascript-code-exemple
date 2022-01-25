// Uma das principais diferenças entre let e var está na exclusividade da variável quando declarada dentro de um bloco, observe o comportamento dos exemplos a seguir

let variavel1 = 4; 

{
    let variavel2 = 5;
    console.log('Dentro=',variavel2);
}

console.log('Fora=',variavel1);

// Neste exemplo a variável só é acessada através do método em que foi declara. 
function teste() {
    let variavel3 = 'variável local';
    console.log(variavel3);
}

teste()