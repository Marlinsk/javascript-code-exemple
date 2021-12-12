const produtos = [
    { nome: 'iMac', preco: 20.099, fragil: true },
    { nome: 'Apple Watch Series 7', preco: 5.999, fragil: true },
    { nome: 'Tigela de plástico', preco: 20.00, fragil: false },
    { nome: 'Copo de plástico do homem-aranha', preco: 16.00, fragil: false }
]

console.log(produtos.filter(function(p) {
    return p.preco > 2.000
}))

const caro = produto => produto.preco >= 20.000
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

