const funcs = []

for(var i = 0; i < 10; i ++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]() // como var não tem escopo ele sempre irar imprimir 10