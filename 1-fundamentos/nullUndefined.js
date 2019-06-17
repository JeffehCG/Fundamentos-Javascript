let valor // não inicializada, por tanto por padrao o valor é undefined
console.log(valor)

valor = null // ausencia de valor, não aponta pra nenhum lugar na memoria
console.log(valor)
//console.log(valor.toString())//erro, variaveis nullas não podem ser acessadas 

const produto = {}
console.log(produto.preco)//undefined por causa do preço
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)