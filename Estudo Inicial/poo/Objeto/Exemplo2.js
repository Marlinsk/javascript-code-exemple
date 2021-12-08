// Estratégias para criação de objetos

// 1º forma: usando a notação literal
const obj1 = {}
console.log(obj1);

// 2º forma: Object em JS
const obj2 = new Object;
console.log(obj2);

// Verificando os tipos
console.log(typeof Object); 
console.log(typeof new Object);

// 3º forma: Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getDesconto = () => {
        return preco * (1 - desconto);
    }
}

const p1 = new Produto('Alexa', 379.05, 0.04);
console.log(p1.nome);
console.log('R$',p1.getDesconto());

const p2 = new Produto('Caneta Técnica, Uni-Ball', 101.25, 0.10);
console.log(p2.nome);
console.log('R$',p2.getDesconto());

// 4º forma: Função Factory
function Funcionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = new Funcionario('Handré', 1234.56, 2);

console.log('R$', f1.getSalario());

const f2 = new Funcionario('kleber', 1545.20, 15);
console.log('R$', f1.getSalario());

// 5º forma: Object.create
const animal = Object.create(null);
animal.nome = 'Coruja-de-igreja';
console.log(animal.nome);

// JSON
const fromJSON = JSON.parse('{"info": "Hey, I am JSON"}');
console.log(fromJSON.info);