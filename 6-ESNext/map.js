const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)// errado
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {} , 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl, ch) =>{
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))//has - verifica se o elemento esta dentro do Map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) //size - quantidade de elementos dentro do map

chavesVariadas.set(123,'a')
chavesVariadas.set(123, 'b')// não aceita chaves duplicadas
chavesVariadas.set(456, 'b')// aceita valores duplicados 
console.log(chavesVariadas)