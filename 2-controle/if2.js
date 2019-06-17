function teste1(num){
    if(num > 7)
        console.log(num)
        console.log('Final')//essa linha sempre sera executada pois nãp faz parte do if
}

teste1(6)
teste1(8)

function teste2(num){
    if(num>7);{
        console.log(num)
    }
}

teste2(6)//os dois seram exibidos pois tem um ponto e virgula depois do if, ou seja sera outro bloco
teste2(8)
