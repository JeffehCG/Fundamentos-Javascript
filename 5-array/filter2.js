Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let x = 0; x < this.length ; x++){
        if(callback(this[x],x,this)){
            newArray.push(this[x])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook',preco: 2499, fragil:true},
    {nome: 'iPad Pro',preco: 4199, fragil:true},
    {nome: 'Copo de Vidro',preco: 12.49, fragil:true},
    {nome: 'Copo de Plastico',preco: 18.99, fragil:false}
]

const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil == true
console.log(produtos.filter2(produtoCaro).filter2(produtoFragil))