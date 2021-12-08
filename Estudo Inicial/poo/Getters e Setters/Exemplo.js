const sequencia = {
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 82

// Neste caso o valor não será alterado por causa da condicional criada no objeto 
console.log(sequencia.valor, sequencia.valor)