//Armazenando uma funcao em uma variavel
const printSoma = function (a, b){
    console.log(a+b)
}
printSoma(5,2)
console.log(printSoma)

//Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
  return a+b
}
console.log(soma(2,3))

//Retorno implícito
const subtracao = (a,b) => a-b
console.log(subtracao(4,2))

const imprimir2 = a => console.log(a)
imprimir2("Nada")