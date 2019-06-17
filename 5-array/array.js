//no javascript array é praticamente um objeto, a diferença é que o array é identificado por indices, e o objeto atributos(keys)

//Criando array exemplos
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovador = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

// Colocando novos dados no array
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length) //mostra damanho do array

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados[8] === undefined)

//algumas funções
aprovados.sort() // ordena o array
console.log(aprovados)

delete aprovados[1] //deletando indice 1 - tornando undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados.splice(1,9, 'Carlos' , 'Ana') //com splice nesse exemplo sera excluido o indice 1 ao 9 e em seguida acrescentado mais dois
console.log(aprovados)
aprovados.splice(1,0, 'Elemento1' , 'Elemento2', 'Elemento3')// nesse outro exemplo colocar mais dois valores apartir do indice 0
console.log(aprovados)
aprovados.splice(1,3) // exclui do indice 1 ao 3
console.log(aprovados)