const soma = function (x, y) {
    return x + y;
}

const imprimirResultado = function (v1, v2, operacao = soma){
    console.log(operacao(v1, v2));
}

// Exemplo 1
imprimirResultado(operacao(324, 127));

// Exemplo 2
imprimirResultado(324, 127, soma);

// Exemplo 3
imprimirResultado(324, 127, function(x, y){
    return x - y;
});

// Exemplo 4 
imprimirResultado(324, 127, (x, y) => x * y);

// Exemplo 5
const pessoa = {
    falar: function() {
        console.log('Hey 22!')
    }
}

pessoa.falar()