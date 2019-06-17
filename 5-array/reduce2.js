const alunos = [
    {nome: 'João', nota: 7.3, bolsista:false},
    {nome: 'Maria', nota: 9.2, bolsista:true},
    {nome: 'Pedro', nota: 9.8, bolsista:false},
    {nome: 'Ana', nota: 8.7, bolsista:true}
]

//Desafio 1: Todos os alunos são bolsistas?
const resultado1 = alunos.map(aluno => aluno.bolsista).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    if (acumulador && atual == true)
        return true
    else 
        return false
})
console.log(resultado1 + `\n`)
//ou
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)+`\n`)

//Desafio 2: Algum aluno é bolsista?
const resultado2 = alunos.map(aluno => aluno.bolsista).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    if (acumulador || atual == true)
        return true
    else 
        return false
})
console.log(resultado2+`\n`)
// ou
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)+`\n`)