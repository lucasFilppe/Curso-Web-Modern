const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: 'Campus universitario',
        numero: 1000
    }
}

console.log(pessoa);

const {nome, idade} = pessoa
console.log(nome, idade);
