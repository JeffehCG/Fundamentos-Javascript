const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //chaves do objeto
console.log(Object.values(pessoa))//valores do objeto
console.log(Object.entries(pessoa))//lista das chaves e valores

//Percorrendo os valores e chaves do objeto
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
//ou
Object.entries(pessoa).forEach(([chave,valor]) => { //usando o destructuring para destruturar o array que o foeEach puxa, jogando em chave e valor
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, // vai aparecer em keys
    writable: false, // não vai ser modificada
    value: '01/01/2019'    
})//definir a propriedade de um atributo no objeto, se ele pode ser alterado por exemplo

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScrit 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest,o1,o2)
console.log(dest)//assign concatena os atributos de todos objetos selecionados

Object.freeze(obj) //freeze congela o objeto, ou seja, não pose ser alterado seus atributos
obj.c = 1234
console.log(dest)