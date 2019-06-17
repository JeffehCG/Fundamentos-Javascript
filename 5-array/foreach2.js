Array.prototype.forEach2 = function(funcao){
    for(x in this){
        if(this[x] == undefined){
            break
        }else{
        funcao(this[x],parseInt(x),this)
        }
    }
}

const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach2(function(nome,indice){
    console.log(`${indice + 1}: ${nome}`)
})
