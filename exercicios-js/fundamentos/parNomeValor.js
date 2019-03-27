// par Nome/Valor
const saudacao = 'Iae'   //Contexto logico 1

function exec(){
    const saudacao = 'Opa'     //Contexto logico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Matheus',
    idade: '18',
    peso: '70',
    endereco: {
        rua: 'Paulista',
        numero: '45'

    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
