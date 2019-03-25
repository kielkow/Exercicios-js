let a = {}
a.name = 'Matheus'    // atribuição por referencia             
let b = a
b.name = 'Lucas'
console.log(a, b)

let c = 5
let d = c             // atribuição por valor
d++
console.log(c, d)


let valor     // não inicializada
console.log(valor)

valor = null  //ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
//delete produto.preco --> recomendado para apagar atributo preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)