console.log(soma(2, 4)) // No tipo 'function declaration', o interpretador carrega primeiro todas as funções do código e depois os outputs.

// function declaration
function soma(x, y) {
    return x + y
}

// function expression 
const sub = function (x, y) {
    return x - y
}
console.log(sub(2, 4));

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(2, 4));