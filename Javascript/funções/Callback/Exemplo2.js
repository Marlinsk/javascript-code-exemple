const notas = [5.8, 3.4, 6.9, 11.0, 2.4, 0.8, 9.8, 1.5];

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

// Com callback 
const notasBaixas2 = notas.filter((nota) => nota < 7);

console.log(notasBaixas2);

// Outra forma de código callback
const notasAbaixo = (nota) => nota < 7;
const notasBaixas2 = notas.filter(notasAbaixo);