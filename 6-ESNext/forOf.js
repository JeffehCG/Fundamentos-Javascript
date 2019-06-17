// diferente do for in que pega as chaves, o for of pega os valores
for (let letra of 'Cod3r'){
    console.log(letra)
}

// for of com array
const assuntosEcma = ['Map','Set','Promise']

for (let i in assuntosEcma){
    console.log(i)
}

for (assunto of assuntosEcma){
    console.log(assunto)
}

//for of com map
const assuntosMap = new Map([
    ['Map',{abordado:true}],
    ['Set',{abordado:true}],
    ['Promise', {abordado:false}]
])

//exibindo chave e valor
for (let assunto of assuntosMap){
    console.log(assunto)
}

//exibindo apenas chaves
for(let chave of assuntosMap.keys()){
    console.log(chave)
}

//exibindo apenas valores
for(let valor of assuntosMap.values()){
    console.log(valor)
}

//exibindo chave e valor em variaves separadas
for(let [ch,vl] of assuntosMap.entries()){
    console.log(ch,vl)
}

//for of com set
const s = new Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}