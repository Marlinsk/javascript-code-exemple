Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const animais = ['Águia-Careca', 'Bicho-Preguiça', 'Elefante-Africano', 'Macaco-Prego', 'Pica-Pau','Tatu-Bola']

animais.forEach2(function (nome, indice) {
    console.log(`${indice}) ${nome}`)
})