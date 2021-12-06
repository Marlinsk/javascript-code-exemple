function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 8999,
    desconto: 0.25,
    getPreco
}

console.log(produto)
console.log(getPreco()) // Output in console = R$ Nan
console.log(produto.getPreco())

// Usando global para definir os valores

global.preco = 1256
global.desconto = 0.08

console.log(produto.getPreco());

const carro = {preco: 49867, desconto: 0.20}

// Utilizando call
console.log(getPreco.call(carro));

console.log(getPreco.call(carro, 0.32, '$'));

// Utilizando apply
console.log(getPreco.apply(carro));

console.log(getPreco.apply(carro, [0.32, '$']));