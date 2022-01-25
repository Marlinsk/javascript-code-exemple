// Neste exemplo, o console log tem acesso a variável em bloco, tanto por dentro quanto por fora.
{
    var variavel1 = 'variável em bloco';
    console.log(variavel1);
}

console.log(variavel1);

// Neste exemplo podemos ver como a subscrição pode afetar o valor da variável declarada do lado de fora do bloco com o mesmo nome.  
var variavel2 = 67

{
    var variavel2 = 45;
    console.log('Dentro do bloco=', variavel2);
}

console.log('Lado de fora=', variavel2);

// Neste exemplo a variável só é acessada através do método em que foi declara. 
function teste() {
    var variavel3 = 'variável local';
    console.log(variavel3);
}

teste(); // Imprimindo a variável no console através de uma function