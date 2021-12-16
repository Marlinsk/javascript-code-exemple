Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(25, 30)) {
        console.log('Quadro de honra');
    } else if (nota.entre(12, 20.99)) {
        console.log('Aprovado');
    } else if (nota.entre(6, 10.99)) {
        console.log('Recuperação');
    } else if (nota.entre(0, 5.89)) {
        console.log('Reprovado');
    } else {
        console.log('Nota inválida');
    }

    console.log('fim')
}

imprimirResultado(30);
imprimirResultado(27);
imprimirResultado(16);
imprimirResultado(18);
imprimirResultado(9);
imprimirResultado(7);
imprimirResultado(-1);
imprimirResultado(0);