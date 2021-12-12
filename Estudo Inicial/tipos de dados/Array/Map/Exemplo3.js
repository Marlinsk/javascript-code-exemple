Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinhoCompras = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Caneta Bic", "preco": 26.75 }',
    '{ "nome": "Kit de Lápis", "preco": 16.00 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasObjeto = produto => produto.preco

const resultado = carrinhoCompras.map2(paraObjeto).map2(apenasObjeto)
console.log(resultado);