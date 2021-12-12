const alunos = [
    { nome: 'Andrei', nota: 12.7, bolsista: false },
    { nome: 'Breno', nota: 10.4, bolsista: false },
    { nome: 'Carol', nota: 14.8, bolsista: true },
    { nome: 'Carla', nota: 11.4, bolsista: true },
    { nome: 'Marcela', nota: 15.0, bolsista: false },
    { nome: 'Markoh', nota: 20.1, bolsista: true }
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)


