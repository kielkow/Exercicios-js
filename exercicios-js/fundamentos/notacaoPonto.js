console.log(Math.ceil(6.1))

const object = {}
object.nome = 'Matheus'
//object['nome'] = 'Matheus'
console.log(object.nome)

function obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('exec ...')
    }
}

const obj1 = new obj('Joao')
const obj2 = new obj('Paulo')
console.log(obj1.nome)
console.log(obj2.nome)
obj2.exec()
