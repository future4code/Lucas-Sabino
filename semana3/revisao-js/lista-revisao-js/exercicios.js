// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = []
    for(let i = array.length - 1; i >=0; i--){
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a,b)=>a-b)
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter(array => array % 2 === 0)
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let i = 0
    const numerosQuadrado = array.filter(array => array % 2 ===0).map(array => array * array)
    return numerosQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    maiorNumero = -Infinity
    for(let numero of array){
        if (numero > maiorNumero){
            maiorNumero = numero
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {}
    let numMaior
    let numMenor 
    if(num1 > num2){
        numMaior = num1
        numMenor = num2
    } else {
        numMaior = num2
        numMenor = num1
    }
    let divisivel = numMaior % numMenor === 0
    objeto = {
        maiorNumero: numMaior,
        maiorDivisivelPorMenor: divisivel,
        diferenca: (numMaior - numMenor)
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
     let primeirosPares = []
     for(let i = 0; primeirosPares.length <n; i++){
        if(i %2 ===0){
            primeirosPares.push(i)
        }
     } 
     return primeirosPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipoTriangulo 
    if(ladoA === ladoB && ladoB === ladoC && ladoC === ladoA){
        tipoTriangulo = "Equilátero"
    } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA){
        tipoTriangulo = "Isósceles"
    }else {
        tipoTriangulo = "Escaleno"
    }
    return tipoTriangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a,b) => a - b)
    let novoArray = [array[array.length -2], array[1]]
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    novoObjeto = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let arrayPermissao = pessoas.filter(pessoas => pessoas.altura > 1.5 && pessoas.idade > 14 && pessoas.idade < 60)
    return arrayPermissao
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}