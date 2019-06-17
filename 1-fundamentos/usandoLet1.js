let numero = 1
let numero2 = 3
{
    let numero = 2 
    console.log('dentro =', numero) //let so é visto dentro do proprio escobo (bloco)
    console.log(numero2)// caso não tenha a variavel no bloco interno ele ira procucar nos blocos externos
}
console.log('fora =', numero)