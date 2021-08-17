/*EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
1.a.
10 
50

b.a função seria executada mas não exibiria nada, pois não existiria o console.log

2.a. A função está verificando se há a palavra 'cenoura', transformando tudo para minusculo a partir da entrada do usuário. 

b.  i. true
    ii. true
    iii. true
*/

//EXERCÍCIO DE ESCRITA DE CÓDIGO
//1. a. 
function imprime (){ 
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudante}`)
}

let nome = 'lucas'
let idade = 27
let cidade = 'Carpina'
let estudante = 'estudante'
imprime(nome, idade, cidade, estudante)

//b.
nome = prompt('Informe seu nome')
idade = prompt('Informe sua idade')
cidade = prompt('Informe sua cidade')
estudante = prompt('Informe sua profissão')
imprime(nome, idade, cidade, estudante)

//2.a.
function numero (num1, num2){
    const soma = num1 + num2
    return soma 
}
entradaNum1 = Number(prompt('Escreva o primeiro numero'))
entradaNum2 = Number(prompt('Escreva o segundo numero'))
console.log('A soma dos numeros é:', numero(entradaNum1, entradaNum2))

//b.
function numeroMaior (num1, num2){
    maior = num1 >= num2
    return maior
}
//c.
function numeroPar (num){
    par = (num%2) === 0
    return par
}
//d.
function mensagem(sms){
    const mensagemMaiuscula = prompt('digite uma mensagem').toUpperCase()
    console.log('Sua mensagem Maiúscula:',mensagemMaiuscula)
    console.log('Tamanho da sua mensagem:', mensagemMaiuscula.length)
}
mensagem()

//3.
let x,y 
function soma(x,y){
    resultado = x + y
    return resultado
}
function subtracao(x,y){
    resultado = x - y
    return resultado
}
function multiplicacao(x,y){
    resultado = x * y
    return resultado
}
function divisao(x,y){
    resultado = x / y
    return resultado
}

numeroUsuario1 = Number(prompt('Digite o primeiro número'))
numeroUsuario2 = Number(prompt('Digite o segundo número'))
console.log('O resultado da soma é:',soma(numeroUsuario1, numeroUsuario2))
console.log('O resulatdo da subtração é:',subtracao(numeroUsuario1, numeroUsuario2))
console.log('O resultado da multiplicação é:',multiplicacao(numeroUsuario1, numeroUsuario2))
console.log('O resultado da divisão é:',divisao(numeroUsuario1, numeroUsuario2))

//DESAFIO
//a.
let parametro = (par1) => {
    console.log(par1)
}

//b.
let valores = (val1, val2) => {
    somar = val1 + val2 
    parametro(somar) 
}
valores(Number(prompt('primeiro numero do desafio')), Number(prompt('Segundo numero do desafio')))

//2. hip = sqrt(a^2 + b^2)
function teorema (a,b){
    const hip = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
    return hip
}
const valorA = prompt('Valor de A no teorema')
const valorB = prompt('Valor de B no teorema')
console.log('A hipotenusa é:',teorema(valorA, valorB))