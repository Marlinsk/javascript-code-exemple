const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'André',
        nota: 8.7
    }, {
        nome: 'Mariana',
        nota: 9.0
    }, {
        nome: 'Jane',
        nota: 11.7
    }] 
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Arthur',
        nota: 14.7
    }, {
        nome: 'Daniel',
        nota: 10.4
    }, {
        nome: 'Rosângela',
        nota: 15.6
    }]
}]

const getNotasDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotasDoAluno)
const notas1 = escola.map(getNotasDaTurma)

console.log(notas1)

// Utilizando flatMap para obter todas as notas em um único array
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)