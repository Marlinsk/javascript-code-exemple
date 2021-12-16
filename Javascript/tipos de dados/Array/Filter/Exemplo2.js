Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'iMac', preco: 20.099, fragil: true },
    { nome: 'Apple Watch Series 7', preco: 5.999, fragil: true },
    { nome: 'Tigela de plástico', preco: 20.00, fragil: false },
    { nome: 'Copo de plástico do homem-aranha', preco: 16.00, fragil: false }
]

const caro = produto => produto.preco >= 20.000
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))