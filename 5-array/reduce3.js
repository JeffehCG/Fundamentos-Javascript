Array.prototype.reduce2 = function(callback,inicial){
    const indiceInicial = inicial ? 0 : 1
    let acumulador =inicial || this[0]
    for(let x = indiceInicial ; x < this.length ; x++){
        acumulador = callback(acumulador,this[x],x,this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma,21))