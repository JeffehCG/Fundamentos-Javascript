console.log(soma(3,4)) // sera executado antes pois as funçoes sao lidas primeiro
//console.log(sub(3,4)) // não ira conseguir, pois a function expression so estara disponivel depois dela

// function declaration 
function soma(x,y){
    return x + y 
}

// function expression
const sub = function (x,y){
    return x - y
}
console.log(sub(3,4))

// named function expression
const mult = function mult(x,y){
    return
}