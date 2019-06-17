// Cadeira de prototipos (prototype chain)
Object.prototype.attr0 = 'Z' //quando não é definido o __proto__ (ou seja, o objeto de herença, ele fica como prototype)
// cuidado para colocar atributos em Object.prototype
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0)// como prototype tem attr0 , e o avo esta com herença no mesmo ele busca o atributo do prototype
console.log(filho.attr1,filho.attr2,filho.attr3)

//Outro exemplo
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing - muda o valor de ferrari em relação ao objeto pai
}

const volvo = {
    modelo: 'V40',
    status(){ // altera a função status do objeto volvo (super- palavra para reverenciar o prototipo)
        return `${this.modelo}:${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro) // define carro como prototypo de ferrari
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())