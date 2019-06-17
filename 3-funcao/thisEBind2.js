function Pessoa(){
    this.idade = 0

    const self = this //self trava o this no objeto pessoa
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //setInterval é um temporizador, a cada 1000 milisegundos sera disparado, e o this muda, por isso deve ser usado bind ou self
}

new Pessoa