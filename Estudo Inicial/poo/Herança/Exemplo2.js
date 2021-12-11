// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // isto é só um exemplo, não é recomendado fazer isso.

const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta 
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const mcLaren = {
    modelo: '765LT',
    velMax: 330 // shadowing
}

const porsche = {
    modelo: '718 Cayman GT4',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(mcLaren, carro);
Object.setPrototypeOf(porsche, carro);

console.log(mcLaren);
console.log(porsche);

porsche.acelerarMais(100);
console.log(porsche.status());

mcLaren.acelerarMais(300);
console.log(mcLaren.status());