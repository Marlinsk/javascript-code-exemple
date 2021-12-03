// Estratégia 1 para gerar um valor padrão.
function somar1(v1, v2, v3){
    v1 = v1 || 1;
    v2 = v2 || 1;
    v3 = v3 || 1;

    return v1 + v2 + v3
}

console.log(somar1(), somar1(1), somar1(3, 17, 29), somar1(0, 0, 0));

// Estratégia 2, 3 e 4 para gerar um valor padrão.
function somar2(v1, v2, v3){
    v1 = v1 !== undefined ? v1 : 1;
    v2 = 1 in arguments ? v2 : 1;
    v3 = isNaN(v3) ? 1 : v3;

    return v1 + v2 + v3
}

console.log(somar2(), somar2(1), somar2(3, 17, 29), somar2(0, 0, 0));

// Valor padrão do es2015
function soma3(v1 = 1, v2 = 1, v3 = 1){
    return v1 + v2 + v3;
}

console.log(somar3(), somar3(1), somar3(3, 17, 29), somar3(0, 0, 0));

