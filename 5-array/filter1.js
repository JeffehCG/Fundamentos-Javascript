const produtos = [
    {nome: 'Notebook',preco: 2499, fragil:true},
    {nome: 'iPad Pro',preco: 4199, fragil:true},
    {nome: 'Copo de Vidro',preco: 12.49, fragil:true},
    {nome: 'Copo de Plastico',preco: 18.99, fragil:false}
]

const produtoCaro = function(produto){
    if(produto.preco >= 500){
        return true
    }else{
        return false
    }
}
/* ou
const produtoCaro = produto => produto.preco >= 500
*/

const produtoFragil = function(produto){
    if(produto.fragil == true){
        return true
    }else{
        return false
    }
}  
/* ou
const produtoFragil = produto => produto.fragil == true
*/

console.log(produtos.filter(produtoCaro).filter(produtoFragil))
