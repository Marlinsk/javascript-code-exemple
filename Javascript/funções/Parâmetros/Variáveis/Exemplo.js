function soma() {
    let soma = 0;
    for (let i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(12, 34, 67.5));

function lista(lista = []) {
    for (let i in lista){
        console.log(lista[i])
    }
}

console.log(lista(['Camaleão', 'Cavalo', 'Leão-Atlas', 'Papagaio-Azul', 'Zebra']))
