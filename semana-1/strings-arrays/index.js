/*INTERPRETAÇÃO DE CÓDIGO
1.
    a. undefined
    b. null
    c. 11
    d. 3
    e. [3,19,5,6,7,8,9,10,11,12,13]
    f. 9

2. 
    SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

//ESCRITA DE CÓDIGO
//1.
let nome = prompt('Digite seu nome')
let email = prompt('Digite seu e-mail')

console.log(`O e-mail ${email} foi cadastrado com sucesso.\nSeja bem-vinda(o), ${nome}`)

//2.
//a.
const comidas = ['chocolate', 'strogonoff', 'pizza', 'hamburguer', 'yakisoba']
console.log(comidas)

//b.
console.log(comidas[0],"\n",
    comidas[1],"\n",
    comidas[2],"\n",
    comidas[3],"\n",
    comidas[4],"\n")

//c
const novaComida = prompt('Qual sua comida preferida?')
comidas[1] = novaComida
console.log(comidas)

//3.
//a.
let listaDeTarefas = []
//b.
listaDeTarefas[0] = prompt('Informe uma tarefa que precise realizar no dia.') 
listaDeTarefas[1] = prompt('Informe uma outra tarefa que precise realizar no dia.')
listaDeTarefas[2] = prompt('Informe mais uma tarefa que precise realizar no dia.')
//c.
console.log(listaDeTarefas)
//d.
const i = Number(prompt('Digite o indice de uma tarefa que ja realizou'))
//e.
listaDeTarefas.splice(i,1)
//f.
console.log(listaDeTarefas)


//DESAFIO
//1.
const frase = prompt('Digite uma frase')
let fraseSeparada = frase.split(" ")
console.log(fraseSeparada)
//2.
const array = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa']
console.log("O abacaxi está no índice:",array.indexOf('Abacaxi'),"\nO array tem tamanho:", array.length)
