// Factory simples
function criarPessoa() {
    return {
        nome: 'Rayssa',
        sobrenome: 'Leal'
    }
}

console.log(criarPessoa());

// Factory com parâmetros
function criarProduto(nome, preco, desconto){
    calc = preco * desconto
    valorDesconto = preco - calc
    
    return {
        nome,
        preco,
        valorDesconto
    }
}

console.log(criarProduto('Notebook Odyssey', 5400, 0.15));
console.log(criarProduto('iPad', 7850, 0.35));
console.log(criarProduto('Samsung Smart TV 58" UHD 4K 58AU7700', 3280, 0.15));