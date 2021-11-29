const animal = {
    nome: 'Arara-azul-grande',
    nome_cientifico: 'Anodorhynchus hyacinthinus',
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

const { nome, nome_cientifico } = animal
console.log(nome, nome_cientifico);

const { nome: n, nome_cientifico: nc } = animal
console.log(n, nc);

const { habitat, classe=true } = animal
console.log(habitat, classe);

const { taxonomia: { reino, filo, subfilo, classe } } = animal
console.log(reino, filo, subfilo, classe);