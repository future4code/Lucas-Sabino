//Exercício de interpretação de código
/*  1. O código soma o valor de i na variável valor e repete até o 4. Saída: 10
    2.  a. Todos os números maiores que 18 "19,21,23,25,27,30"
        b. Sim, basta armazenar o índice em uma variável e imprimir sempre que imprimir o resultado.
    3.  *
        **
        ***
        ****
*/
//1.
const pet = Number(prompt("Quantos pets você tem?"))
if(pet === 0){
    console.log('Que pena! Você pode adotar um pet')
} else if(pet > 0){
    let i = 0
    let nomesPet = ""
    for(pets = ''; i < pet; i++){
        pets = prompt('Nome do pet')
        nomesPet+=pets+' '
    }
    console.log(nomesPet)
}

//2.a.
const arrayOriginal = [1,2,3,4,5,100,7,8,9,90]
function imprimir(array){
    for (array of arrayOriginal){
        console.log(array)
    }
}
imprimir(arrayOriginal)
//b.
function imprimeDivisao(array){
    for (array of arrayOriginal){
    console.log(array/10)
    }
}
 imprimeDivisao(arrayOriginail)
//c.
function imprimePar(array){
    for (let i = 0; i < arrayOriginal.length; i++){
        if(arrayOriginal[i] % 2 === 0){
            console.log(arrayOriginal[i])
            
        }
    }
}
imprimePar(arrayOriginal)
//d.
function novoArray(array){
    let i = 0
    for (let numero of arrayOriginal){
        console.log(`O elemento do índex ${i} é: ${numero}`)
        i++
    }
}
novoArray(arrayOriginal)
//e. 
function maiorValor(array){
    let valorMaximo = 0
    let valorMinimo = 9999999
    for(numero of arrayOriginal){
        if(numero > valorMaximo){
            valorMaximo = numero
        }
        if(numero < valorMinimo){
            valorMinimo = numero
        }
    }
    console.log(valorMaximo)
    console.log(valorMinimo)
}
maiorValor(arrayOriginal)

//Desafio
//1.
const numeroPensado = Number(prompt('Numero que você pensou'))
console.log('Vamos jogar!')

let numeroChute = Number(prompt('Chute um numero'))
let i = 0
while(numeroPensado !== numeroChute){
    if(numeroChute < numeroPensado){
    console.log(`O número chutado foi: ${numeroChute} \nErrrrrrr, é maior`)
} else if(numeroChute > numeroPensado){
    console.log(`O número chutado foi: ${numeroChute} \nErrrrrrr, é menor`)
} 
numeroChute = Number(prompt('Chute um numero'))
i++
}
if(numeroChute === numeroPensado){
    i++
    console.log(`Acertou!! \nO número de tentativas foi ${i}`)
}

//2.
function numeroAleatorio(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
const numeroPensado = numeroAleatorio(1,100)
console.log('Vamos jogar!')

let numeroChute = Number(prompt('Chute um numero'))
let i = 0
while(numeroPensado !== numeroChute){
    if(numeroChute < numeroPensado){
    console.log(`O número chutado foi: ${numeroChute} \nErrrrrrr, é maior`)
} else if(numeroChute > numeroPensado){
    console.log(`O número chutado foi: ${numeroChute} \nErrrrrrr, é menor`)
} 
numeroChute = Number(prompt('Chute um numero'))
i++
}
if(numeroChute === numeroPensado){
    i++
    console.log(`Acertou!! \nO número de tentativas foi ${i}`)
}