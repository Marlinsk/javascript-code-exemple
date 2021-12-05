const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar
falar() // Conflito entre paradigma: funcional e Programação Orientada a Objetos

const pessoaFala = pessoa.falar.bind(pessoa)
pessoaFala()