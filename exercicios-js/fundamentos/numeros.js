const peso1 = 1.0
const peso2 = Number('2.5')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.875
const avaliacao2 = 5.907

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))   //Determina quantidade de casas apos a virgula
console.log(media.toString())   //Converte para String
console.log(media.toString(2))  //Converte para binário
console.log(typeof media)
console.log(typeof Number)