// Novo recurso do ES2015, destrutura um objeto ou array

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero : 1000
    }
}

const {nome, idade} = pessoa //Foi extraido do objeto pessoa nome e idade, ou seja, agora pode ser acessado novas duas variaveis
console.log(nome,idade)

const{nome : n , idade: i} = pessoa
console.log(n,i) // variaveis com nome n e i

const {sobrenome, bemHumorada = true} = pessoa //caso não haja o atributobemHumorada ela vai ser True
console.log(sobrenome,bemHumorada) // 

const {endereco:{logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep) // sera estraido apenas os atributos de dentro de endereco, e não endereco

