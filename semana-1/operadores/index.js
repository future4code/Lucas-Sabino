/*  1.  a. false
        b. false
        c. true
        d. boolean

    2.  O usuário pretende usar números mas está trabalhando com strings.
        No console será exibida a concatenação entre os dois resultados, se o primeiro numero for 1 e o segundo 2 o resultado da 'soma' será 12.

    3.  Para solucionar o problema, basta conveter de string para Number:
        let primeiroNumero = Number(prompt("Digite um número!"))
        let segundoNumero = Number(prompt("Digite outro número!"))
        
        const soma = primeiroNumero + segundoNumero

        console.log(soma)
        */

//1.
let idade = Number(prompt("Qual sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do(a) seu(sua) melhor amigo(a)?"))

console.log("Sua idade é maior que a do(a) seu(sua) melhor amigo(a)?",idade>idadeAmigo)
console.log('Diferença de idade',idade - idadeAmigo)

//2
let numero = Number(prompt('Insira um número par'))
console.log('Resto da divisão por 2:',numero % 2)
//c) o resto da divisão sempre será 0 quando um numero par é dividido por 2
//d) Caso o usuário insira um numero ímpar, o resultado do resto será 1.

//3
let novaIdade = Number(prompt('Insira sua idade'))
console.log('Sua idade em meses é:', idade * 12)
console.log('Sua idade em dias é:', idade * 365)
console.log('Sua idade em horas é:', idade * 8760)

//4
let a = Number(prompt('Insira um número'))
let b = Number(prompt('Insira um segundo número'))
console.log('O primeiro número é maior que o segundo?', a > b)
console.log('O primeiro número é igual ao segundo?', a === b)
console.log('O primeiro número é divisível pelo segundo?', (a % b) === 0)
console.log('O segundo número é divisível pelo primeiro?', (b % a) === 0)

//DESAFIO

//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

let f 
let c 
let k 
let kToF 
// = (f - 32)*(5/9) + 273.15
let fToC 
// = c*(9/5) + 32

//1.
//a)
    f = 77
    console.log(kToF = (f-32)*(5/9)+273.15,'K')

//b)
    c = 80
    console.log(fToC = c*(9/5)+32,'F')

//c)
    c = 30
    fToC = c*(9/5)+32
    kToF = (fToC - 32)*(5/9)+273.15
    console.log(fToC,'F',kToF,'K')

//d)
    c = prompt('Insira um valor em graus Celsius:')
    fToC = c*(9/5)+32
    kToF = (fToC - 32)*(5/9)+273.15
    console.log(fToC,'F',kToF,'K')

//2.
const quiloHora = 0.05

//a)
    console.log('Valor do consumo de 280 Quilowatt-hora R$',quiloHora * 280,)

//b)
    let desconto = 0.15
    console.log('Valor do consumo com 15% de desconto',(quiloHora * 280) * desconto)

//3.
let libra
let kg
let onca
let milha
let pe
let galao
let xicara
// libra para kg = libra / 2.205

//a)
    libra = 20
    console.log(libra,'lb equivalem a', libra / 2.205, 'kg')
    
    //b
    //onça para kg = onca / 35.274
    onca = 10.5
    console.log(onca,'oz equivalem a', onca / 35.274, 'kg')
    
    //c
    //milha para metro = milha * 1609
    milha = 100
    console.log(milha,'mi equivalem a', milha * 1609,'m')
    
    //d
    //pe para metro = pe / 3.281
    pe = 50
    console.log(pe,"ft equivalem a", pe / 3.281, 'm')
    
    //e
    //galao para litro = galao * 3.785
    galao = 103.56
    console.log(galao,'gal equivalaem a', galao * 3.785, 'l')
    
    //f
    //xicara para litro = xicara / 3.52
    xicara = 450
    console.log(xicara,'xic equivalem a', xicara / 3.52, 'l')
    
    //g
    libra = Number(prompt('Digite um peso em Libra'))
    console.log(libra,'lb equivalem a', libra / 2.205, 'kg')
    
    onca = Number(prompt('Digite um peso em Onça'))
    console.log(onca,'oz equivalem a', onca / 35.274, 'kg')
    
    milha = Number(prompt('Digite uma distância em Milha'))
    console.log(milha,'mi equivalem a', milha * 1609,'m')
    
    pe = Number(prompt('Digite uma distância em Pés'))
    console.log(pe,"ft equivalem a", pe / 3.281, 'm')
    
    galao = Number(prompt('Digite um volume em Galão'))
    console.log(galao,'gal equivalaem a', galao * 3.785, 'l')
    
    xicara = Number(prompt('Digite um volume em Xicaras'))
    console.log(xicara,'xic equivalem a', xicara / 3.52, 'l')
    