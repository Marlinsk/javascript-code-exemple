// Função sem retorno 
function calcularMedia(valor1, valor2, valor3){
    calculo = valor1 + valor2 + valor3 / 3
    console.log('A média é',calculo);  
}

calcularMedia(45, 78, 127);

// Função com retorno
function calcularMultiplicação(valor1 = 8, valor2 = 32, valor3 = 64){ 
    return valor1 * valor2 * valor3  
}

console.log(calcularMultiplicação(34, 45, 27));
console.log(calcularMultiplicação(6, 16));
console.log(calcularMultiplicação(21));
console.log(calcularMultiplicação());
