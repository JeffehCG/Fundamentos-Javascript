const escola = "Cod3r"

console.log(escola.charAt(4)) //charAt pega um indice da string selecionada no caso "r"
console.log(escola.charAt(5)) //nenhum indice encontrado
console.log(escola.charCodeAt(3)) //charCodeAt pega o valor do indice encontrada na tabela Ask
console.log(escola.indexOf('3')) //indexOf procura o carecter selecionado na string e dis o indice dela 

console.log(escola.substring(1))
console.log(escola.substring(0,3))//substring ira imprimir os caracteres do indice 0 ao 3

console.log('Escola '.concat(escola).concat("!")) //concatena as strings
console.log('Escola '+escola+"!")

console.log(escola.replace(3,'e')) // substitui os caracteres 3 por r 
console.log(escola.replace(/\d/,'e'))//substitui todos digitos por r 
console.log(escola.replace(/\w/g,'e'))//substitui todos caracteres por r 

console.log('Ana,Maria,Pedro'.split(','))//Transformando uma string em um array, split destaca qual vai ser o simbolo separador

//Estudar regex