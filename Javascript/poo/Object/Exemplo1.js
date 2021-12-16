// coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = 'The Illusion of Life: Disney Animation';
produto['categória'] = 'Livro';
produto['preço'] = 'R$ 432,14';
produto['desconto à vista'] = '15%'

console.log(produto);

// também é possível deletar um dado de forma dinâmica
delete produto['desconto à vista']
console.log(produto);

// objeto complexo
const animal = {
    nome: 'Shiba inu',
    origem: 'Japão',
    'Expectativa de vida': '15 anos',
    'características': {
        'físicas': {
            altura: {
                macho: '35–43 cm', 
                'fêmea': '33–41 cm'
            },
            peso: {
                macho: '8–11 kg',
                'fêmea': '6,8–9 kg'
            },
        },
        personalidade : [
            'Encantador', 
            'Destemido', 
            'Esperto', 
            'Alerta', 
            'Confiante', 
            'Fiel'
        ],
        cores: [
            'Sésamo Vermelho', 
            'Sésame', 
            'Preto sésamo', 
            'Preto e canela', 
            'Creme', 
            'Vermelho'
        ]
    },
    calculoPreco: function() {
        // ...
    }
} 

console.log(animal);

// Introspecção
animal.características.cores = ['Sésamo Vermelho', 'Sésame'];
animal['características']['personalidade'] = ['Encantador', 'Destemido', 'Esperto', 'Curioso', 'Confiante', 'Fiel'];
console.log(animal);

// Deletando
delete animal.calculoPreco;
console.log(animal);