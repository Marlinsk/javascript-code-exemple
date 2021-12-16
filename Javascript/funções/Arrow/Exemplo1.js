let dobro = function (a) {
    return 2 * a;    
}

// Primeiro exemplo de função arrow 
dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI));

// Exemplo de parâmetro 1
ola = () => 'Olá'

// Exemplo de parâmetro 2
ola = _ => 'Olá' // Possui um parâmetro

console.log(ola());