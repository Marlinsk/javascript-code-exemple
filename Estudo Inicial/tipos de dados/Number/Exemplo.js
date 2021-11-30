const valor1 = 17;
const valor2 = 21.14;

// Usando 'Number' para validar valores
console.log(Number.isInteger(valor1));
console.log(Number.isInteger(valor2));

// Criando uma variável com valor Number
const valor3 = Number(67.3); 
console.log(valor3);

// Criando valores numéricos com String 
const valor4 = Number('127');
const valor5 = Number('4.26');

console.log(Number.isInteger(valor4));
console.log(Number.isInteger(valor5));

const calc = valor1 + valor2 + valor3 / (valor4 * valor5);
console.log(calc.toFixed(2));
console.log(calc.toString(2)); // Converte o valor do cálculo para binário.
console.log(typeof calc);