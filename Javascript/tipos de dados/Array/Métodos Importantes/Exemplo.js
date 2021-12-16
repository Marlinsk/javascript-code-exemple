const grandesMentes = ['Albert Einstein', 'Chiquinha Gonzaga', 'David Hilbert', 'Elmina Wilson', 'Leonardo Da Vinci', 'Ludwig van Beethoven','Nikola Tesla','Oscar Niemeyer', 'Wolfgang Amadeus Mozart', 'René Descartes']
console.log(grandesMentes)

grandesMentes.pop() // Remove o último elemento da lista
console.log(grandesMentes) 

grandesMentes.push('Zaha Hadid') // Adiciona um elemento no final da lista
console.log(grandesMentes)


grandesMentes.shift('Pyotr Ilyich Tchaikovsky') // Remove o primeiro elemento da lista
console.log(grandesMentes)

grandesMentes.unshift('Mark Zuckerberg')
console.log(grandesMentes)

// splice pode remover e adicionar elementos

// adicionar
grandesMentes.splice(2, 0, 'Bill Gates', 'Steve Jobs')
console.log(grandesMentes)

// Remover
grandesMentes.splice(3, 2) // remove Steve Jobs
console.log(grandesMentes)

const outrasMentes1 = grandesMentes.slice(2) // novo array
console.log(outrasMentes1)

const outrasMentes2 = grandesMentes.slice(1, 6) // novo array até o índice 6
console.log(outrasMentes1)



