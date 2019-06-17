// let e const
{
    var a = 2
    let b = 3 // let tem escopo de bloco, ou seja, não pode ser acessada fora do bloco
    console.log(b)
}
console.log(a)
//console.log(b)

// Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

let name = 'Pedro'
let apresentacao = `Ola, meu nome é ${name}`
console.log(apresentacao)

// Destructuring
const [l, e, ...tras] = "Cod3r" // destruturando uma string em variaveis
console.log(l,e,tras)

const [x, , y] = [1,2,3]
console.log(x,y)

const {idade: i,nome} = {nome: 'Ana', idade: 9}
console.log(i,nome)