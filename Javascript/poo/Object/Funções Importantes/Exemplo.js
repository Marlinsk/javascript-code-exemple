// Criando um objeto
const pessoa = {
    nome: 'Andryl',
    idade: 21,
    altura: 1.80,
    peso: 80
}

console.log(Object.keys(pessoa)); // pega a chaves do objeto, e lista em um array
console.log(Object.values(pessoa)); // pega os valores do objeto, e lista em um array
console.log(Object.entries(pessoa)); // pega os registros, e lista os subarrays relacionados a chave valor

// Percorrendo os elementos do array
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}:${valor}`);
});

// Definindo as características de uma propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, // Não aceita ser sobreescrita
    value: '16/07/2000'
});

pessoa.dataNascimento = '16/07/1996'; // teste 
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2); // Concatena todos os atributos

Object.freeze(obj);
obj.c = 1234;
console.log(obj);