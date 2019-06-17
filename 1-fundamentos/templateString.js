const nome = 'Rebeca'
const concatenacao = 'Ola' + nome + '!'
const template = `
    Ola
    ${nome}! ` //Criando uma string entre duas crases é mais facil fazer concatenação
console.log(concatenacao,template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()//função para tornar string maiuscula
console.log(`Ei...${up('cuidado')}!`)