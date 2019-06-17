// Funcao sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) //em javascrip a função deixa passar apenas um valor, o segundo vai entrar como undefined
imprimirSoma(2,10,4,5,6,7,8) //nesse caso ele ira apenas considerar os 2 primeiros numeros, o resto é ignorado
imprimirSoma()

//Funcao com retorno
function soma(a , b = 0){ //por padrão a variavel b é 0, se não for passado nada na variavel b
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))