let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //no num2 o valor so sera decrementado depois da verificação, por isso da true
console.log(num1 === num2)
