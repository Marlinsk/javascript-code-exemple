// Armazenando uma função em uma variável
const calcularMedia =  function(valor1, valor2) {
    calculo = valor1 + valor2 / 2
    console.log('A média é',calculo);  
}

calcularMedia(12, 47)

// Armazenando uma função arrow em uma variável
const multiplica = (valor1, valor2) => {
    return valor1 * valor2
}

console.log(multiplica(52, 7));

// Retorno implícito
const subtrair = (valor1, valor2) => valor1 - valor2;
console.log(subtrair(12, 7));

// Simplificado
const imprimeValor = valor => console.log(valor);