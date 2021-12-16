// Notação literal de declaração de objetos
const a = 1;
const b = 2;
const c = 3;

// Atribuindo valores
const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }

console.log(obj1, obj2);

// Atribuindo valores
const nomeAtributo = 'nota';
const valorAtributo = 7.87;

// Atribuindo valores
const obj3 = {}
obj3[nomeAtributo] = valorAtributo;
console.log(obj3);

// Atribuindo valores
const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4);

// Exemplo de criação de função na nova versão do (ECMAScript 2015)
const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2() { 
        // ...
    }
}
