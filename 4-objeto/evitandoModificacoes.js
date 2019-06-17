// Object.preventExtensions - não acrescentar novos atributos no objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer' , preco: 1.99 , tag : 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escola branca'
delete produto.tag
console.log(produto)

// Object.seal - selar objeto, não consegue adicionar e excluir atributos do objeto
const pessoa = {nome: 'Juliana', idade: 36}
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes (atributos não podem ser alterados)
const carro = {marca: 'Gol' , velocidade: 200}
Object.freeze(carro)
carro.modelo = "MT0"
carro.velocidade = 250
delete carro.velocidade
console.log(carro)