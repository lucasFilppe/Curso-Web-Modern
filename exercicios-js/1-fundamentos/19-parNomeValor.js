//par nome/ valor
const saudacao ='opa' //contexto lexico1

function exex(){
    const saudacao = 'Fala'
    return saudacao
}

//objetos sao grupos aninhados de pares nome/ valor
const cliente = {
    nome: 'lucas',
    idade: 23,
    peso: 65.7
}

console.log(saudacao);
console.log(exex());
console.log(cliente);


