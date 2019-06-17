const pilotos = ['Vettel', 'Alonso', 'Raikkonen','Massa']

//remove o ultimo valor do array
pilotos.pop()
console.log(pilotos)

//Adiciona um novo elemento na ultima posicão
pilotos.push('Verstappen')
console.log(pilotos)

//remove o primeiro valor do array
pilotos.shift()
console.log(pilotos)

//Adiciona um novo elemento no começo do array
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adiconar e remover elementos
//Adicionando
pilotos.splice(2,0, 'Bottas','Massa')
console.log(pilotos)
//Removendo
pilotos.splice(3,1)
console.log(pilotos)

//Retornando novo array - pega uma parte do array, e coloca em outro
const algunsPilotos1 = pilotos.slice(2) // apartir do indice 2
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1,4) // pega do incide 1 ao 3 ( o indice 4 não)
console.log(algunsPilotos2) 