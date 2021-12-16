const alunos = [
    { nome: 'Andrei', nota: 18.2 },
    { nome: 'Breno', nota: 10.4 },
    { nome: 'Carol', nota: 14.8 },
]

// Código com uma abordagem Imperativa
let total1 = 0

for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Código com uma abordagem Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)