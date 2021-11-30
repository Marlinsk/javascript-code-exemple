// Primeiro exemplo
const prod1 = {} // Declaração do objeto vazio
prod1.nome = 'Echo Show 8 (1ª Geração): Smart Speaker com tela de 8" e Alexa - Cor Preta' // Declarando um atributo ao objeto vazio
prod1['Preço'] = 'R$ 599,00'
prod1['Desconto de 5% OFF'] = 'R$ 569,05'

console.log(prod1);

// Segundo exemplo
// Declarando os atributos chave e valor dentro do objeto
const prod2 = {
    nome: 'T-Shirt Sportee',
    cor: 'Preta',
    'preço': 'R$ 109'
}

console.log(prod2);

// Terceiro exemplo
// Declarando um objeto dentro de uma chave
const animal = {
    nome: 'Arara-azul-grande',
    'nome científico': 'Anodorhynchus hyacinthinus',
    habitat: 'Pantanal',
    'expectativa de vida': '50 anos(na natureza)',
    taxonomia: {
        reino: 'Animalia',
        filo: 'Chordata',
        subfilo: 'Vertebrata',
        classe: 'Aves',
        ordem:  'Psittaciformes',
        'família': 'Psittacidae',
        'gênero': 'Anodorhynchus',
        'espécie': 'Anodorhynchus hyacinthinus'
    }
}

console.log(animal);