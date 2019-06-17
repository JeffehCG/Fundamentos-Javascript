const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

// o metodo minhaFuncao ira pegar o valor = Global por conta do contexto lexico 
// a função carrega consigo o lugar que ela foi declarada