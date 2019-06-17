//promise é uma promessa de execução
//no caso abaixo sera exibido uma frase depois de determinado segundo informado pelo usuario
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(frase) // resolve so aceita um parametro
        },segundos * 1000)
    } )
}

falarDepoisDe(3,'Que legal!')
    .then(frase => frase.concat('?!?')) //then chama o resolve da promise
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // tratamento do erro caso passe do tempo