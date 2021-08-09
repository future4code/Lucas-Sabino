/*1.let a = 10
    let b = 10

    console.log(b)

    b = 5
    console.log(a, b)
    Saída: 10 10 5 */

/*2.let a = 10
    let b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c)
    Saída: 10 10 10*/

/*3.let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)
    Sugestão:
    let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
    let salarioDiario = prompt("Quanto você recebe por dia?")
    alert('voce recebe ${salarioDiario/horasTrabalhadas} por hora')*/

let nome = undefined
let idade = undefined

console.log("Tipo do nome:", typeof nome,"Tipo da idade:", typeof idade)
//o valor das variáveis ainda não foi declarado, por isso, deverá retornar no "typeof" o resultado "undefined"
nome = prompt("Qual o seu nome?")
idade = prompt("Quantos anos você tem?")
console.log("Tipo do nome:", typeof nome,"Tipo da idade:", typeof idade)
//as variáveis assumiram o tipo string, pois é retorno padrao do prompt.

console.log("Olá,", nome, "você tem",idade, "anos. :D")
//fim da primeira questão

primeiraPergunta = prompt("O dia está ensolarado?")
segundaPergunta = prompt("Você pode ouvir o canto dos pássaros?")
terceiraPergunta = prompt("Você administrou bem seu dia?")

primeiraResposta = primeiraPergunta
segundaResposta = segundaPergunta
terceiraResposta = terceiraPergunta

console.log("O dia está ensolarado?", primeiraResposta)
console.log("Você pode ouvir o canto dos pássaros?", segundaResposta)
console.log("Você administrou bem seu dia?",terceiraResposta)

let a = prompt("Digite um valor para a")
let b = prompt("Digite um valor para b")
let c = undefined

// Aqui faremos uma lógica para trocar os valores
c = a
a = b
b = c
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10