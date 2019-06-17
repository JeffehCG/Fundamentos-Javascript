function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
// se for chamado apenas a função getPreco sem criar as variaveis globais ira exibir um erro, pois dentro da função não tem o valor de ambas variaveis
console.log(getPreco())//pega do global
console.log(produto.getPreco()) // pega do objeto

const carro = {preco: 49990, desc : 0.20}

console.log(getPreco.call(carro)) // com o call e apply você pode passar um objeto para as variaveis na função, ou seja, sera utilizados esses valores no calculo da funçao
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))// diferença entre os dois é a forma que você passa os parametros para função
console.log(getPreco.apply(carro,[0.17, '$']))