let comparaComThis = function(param){
    console.log(this == param)
}

comparaComThis(global) //this aponta para global

const obj = {}
comparaComThis = comparaComThis.bind(obj)//com o bind o this vai apontar sempre para o obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //function arrow não aponta para o global
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)//Arrow sempre aponta para funcão queo contexto foi escrito e o bind não consegue mudar isso
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)