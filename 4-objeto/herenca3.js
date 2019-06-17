const pai = {nome: 'Pedro' , corCabelo: 'preto'}

const filha1 = Object.create(pai) // pega atributos de pai como herença
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome: { value: 'Bia', writable: false, enumerable: true} // especificando o atributo, onde o mesmo não vai poder ser alterado , e podera ser visto com por exemplo o metodo keys
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//mostrar atributos que são do objeto, e são de herença
for(let key in filha2) {
    filha2.hasOwnProperty(key) ? //pega atributos apenas do proprio objeto
        console.log(key) : console.log(`Por herança: ${key}`)
}