function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[1]
    }
    return soma
}
//Arguments é um array dos parametros passado pela função

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1.1,2.2,"Teste"))
console.log(soma('a','b','c'))