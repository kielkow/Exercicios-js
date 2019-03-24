const nome = "Matheus"
const concatena = "Ola " + nome      //Não aceita fazer a quebra de linhas 

const template = `
    Ola                  //Aceita fazer a quebra de linhas
    ${nome}
`

console.log(concatena)
console.log(template)


//expressões ...

console.log(`1 + 1 =  ${1+1} `)   //Executa apenas o codigo que esta dentro dos colchetes

const up = texto => texto.toUpperCase()  
console.log(`Ei .... ${up('cuidado')}!`)