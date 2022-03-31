//função sem retorno
function imprimiSoma(a, b){
    console.log(a + b);
    
}

imprimiSoma(2, 5)

//função com retorno
function soma(a, b = 0)  {
    return a + b
}

console.log(soma(5, 5))