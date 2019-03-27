const pessoa = {
    nome: 'matheus',
    idade: 18,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome : n, idade : i} = pessoa
console.log(nome, idade)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, num}} = pessoa
console.log(ag, num)