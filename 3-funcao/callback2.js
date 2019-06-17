const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//Sem callback
let notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)
console.log(notas)

//com callback
notasBaixas2 = notas.filter(function (nota){
    return nota < 7
}) //filter filtra o array de acordo com a função

console.log(notasBaixas2)

// com callback e arrow function

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)