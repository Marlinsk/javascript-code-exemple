console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('') 
}

console.log('Escola'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// Não faça isso no seu código, isto é apenas um exemplo
String.prototype.toString = function () {
    return 'Estragou tudo'
}

// Testando
console.log('Escola'.reverse())