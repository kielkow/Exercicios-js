const nome = 'matheus'

console.log(nome.charAt(4))        //Retorna a letra na posição 4 da string
console.log(nome.charAt(10))
console.log(nome.charCodeAt(4))    //Retorna o valor da posição na tabela ASCI
console.log(nome.indexOf('m'))     //Retorna a posição em que a letra está

console.log(nome.substring(1))     //Retorna a string a partir da posição selecionada
console.log(nome.substring(0, 3))  //Retorna a string de 0 até 3 mas não incluindo o indice 3

console.log('Nome '.concat(nome).concat('!'))
console.log('Nome ' + nome + '!')

console.log(nome.replace(1, '4'))  //Substiui caracter da posição selecionada por um novo caracter

console.log('Matheus, Lucas, Thiago'.split(','))  //Transforma String em um Array