/*Exercício de interpretação de código
1. Saída:   "Matheus Nachtergaele" 
            "Virginia Cavendish"
            "{Canal: "Globo", horario: "14h"}"

2.  a.  {nome: "Juca", idade: 3, raca: "SRD"}
        {nome: "Juba", idade: 3, raca: "SRD"}
        {nome: "Jubo", idade: 3, raca: "SRD"}
    b.  Inicia um objeto com o conteúdo de outro.

3.  a.  false
        undefined
    b.  O primeiro console imprimiu o valor da chave "backender" enquanto o segundo buscou a chave altura e não encontrou. voltando undefined.
*/

//Exercício de escrita de código
//1. a.
const pessoa = {
    nome: "Lucas",
    apelidos: ['Luke', 'Luquinhas', 'Big L']
}

function imprime (objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]} , ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

imprime(pessoa)

//b.
const novoApelido = {
    ...pessoa,
    apelidos: ['abc', 'def', 'ghi']
}

imprime(novoApelido)

//2. a.
const pessoa1 = {
    nome:'Lucas',
    idade:27,
    profissao:'Estudante'
}
const pessoa2 = {
    nome:'Sabino',
    idade:28,
    profissao:'Desenvolvedor'
}

function array(objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}

console.log(array(pessoa1))
console.log(array(pessoa2))

//3. a.
const carrinho = []
//b.
const fruta1 = {
    nome:'Maçã',
    disponibilidade: true
}
const fruta2 = {
    nome:'Banana',
    disponibilidade: true
}
const fruta3 = {
    nome:'Laranja',
    disponibilidade: true
}
//c.
function feira(fruta) {
    carrinho.push(fruta.nome)
}

feira(fruta1)
feira(fruta2)
feira(fruta3)
//d.
console.log(carrinho)

//Desafios
//1. 
function usuario() {
    const imprimeUsuario = {
        nome: prompt('Digite seu nome'),
        idade: prompt('Qual a sua idade?'),
        profissao: prompt('Qual sua profissão?')
    }
    console.log(imprimeUsuario)
}
usuario()

//2.
const filme1 = {
    anoLancamento: 2021,
    nomeFilme: 'Titanic'
}
const filme2 = {
    anoLancamento: 2022,
    nomeFilme: 'Lagoa azul'
}

function comparaFilme (primeiroFilme, segundoFilme) {
    const testeLancamento = primeiroFilme.anoLancamento > segundoFilme.anoLancamento
    const mesmoAno = primeiroFilme.anoLancamento === segundoFilme.anoLancamento
    console.log(`O primeiro filme foi lançado antes do segundo? ${testeLancamento} \nO primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`)
}
comparaFilme(filme1, filme2)
//3.
function estoque (objetoFruta){
    const disponivel = objetoFruta.disponibilidade !== objetoFruta.disponibilidade
    return disponivel
}
console.log(estoque(fruta1))
console.log(estoque(fruta2))
console.log(estoque(fruta3))