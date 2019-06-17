const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])//undefined pois essa possição no array não existe

valores[4] = 10
console.log(valores)
console.log(valores.length)//tamanho array

valores.push({id : 3} , false , null, 'teste') //push coloca novos itens no array
console.log(valores)

console.log(valores.pop()) //função pop tira o ultimo elemento do array e o exibe
console.log(valores)

delete valores[0] //apaga conteudo do indice 0 do array
console.log(valores)

console.log(typeof valores)//um array é do tipo Object
