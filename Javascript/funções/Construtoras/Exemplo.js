function Carro(velocidadeMax = 250, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0;

    // método público 1
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    // método público 2
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual());

// Criando um novo carro
const tesla = new Carro(420, 25)
tesla.acelerar()
tesla.acelerar()
tesla.acelerar()
console.log(tesla.getVelocidadeAtual());

// Comparando
console.log('\ntypeof Carro =', typeof Carro);
console.log('typeof tesla =', typeof tesla);