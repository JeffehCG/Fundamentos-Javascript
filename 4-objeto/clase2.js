class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // extends herença(prototype) classe 
    constructor(sobrenome,profissao = 'Professor') {
        super(sobrenome) // chama construtor de avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)