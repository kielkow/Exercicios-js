const valores = [5.6, 7.8, 10, 23.4]
console.log(valores[0], valores[1])
console.log(valores[10])

valores[4] = 9
console.log(valores)
console.log(valores.length)

valores[10] = 30
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)

valores.pop()

delete valores[0]
console.log(valores)

console.log(typeof valores)