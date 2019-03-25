//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,4)
imprimirSoma(2)
imprimirSoma(2,4,5,6,7,8)
imprimirSoma()


//funcao com retorno
function imprimirProduto(a,b=1){
    return a*b
}

console.log(imprimirProduto(2,5))
console.log(imprimirProduto(2))
console.log(imprimirProduto())