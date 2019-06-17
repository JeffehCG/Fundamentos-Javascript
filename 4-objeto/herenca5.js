console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// alguns exemplos acima como pode ser visto, todos são do tipo function
// ou seja, todos tem vinculação com seu prototype
// assim você pode criar novos metodos não existentes para o mesmo
// porem cuidado

String.prototype.reverse = function(){
    return this.split('').reverse().join('')//split separa um string em um array, reverse inverte e join junta tudo de novo
}

console.log('Escola Cod3r'.reverse())// exemplo 

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c','d'].first())

//evitar reescrever metodos ja existentes
String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())