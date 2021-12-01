const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 30:
        case 25:
            console.log('Quadro de honra');
            break
        // Exemplo de output do case dentro de um bloco    
        case 12: case 15: {
            console.log('Aprovado');
            break
        }
        case 6: case 10:
            console.log('Recuperação');
            break
        case 0: case 1: case 2: case 3: case 4: case 5:
            console.log('Reprovado');
            break
        default:
            console.log('Nota inválida');     
    }
}

imprimirResultado(30);
imprimirResultado(15);
imprimirResultado(6);
imprimirResultado(0);
imprimirResultado(-1);