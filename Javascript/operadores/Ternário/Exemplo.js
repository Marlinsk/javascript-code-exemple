// Primeira forma de declarar
var resultado = nota => nota >= 15 ? 'Aprovado' : 'Reprovado'
console.log(resultado(16.7));
console.log(resultado(12.1));

// Segunda forma de declarar
var resultado = nota => {
    return nota >= 10 ? 'Aprovado' : 'Reprovado'
} 

console.log(resultado(11.0));
console.log(resultado(8.7));
