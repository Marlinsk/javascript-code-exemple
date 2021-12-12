const alunos = [
    { nome: 'Andrei', nota: 12.7, bolsista: false },
    { nome: 'Breno', nota: 10.4, bolsista: false },
    { nome: 'Carol', nota: 14.8, bolsista: true },
    { nome: 'Carla', nota: 11.4, bolsista: true },
    { nome: 'Marcela', nota: 15.0, bolsista: false },
    { nome: 'Markoh', nota: 20.1, bolsista: true }
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) 

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))