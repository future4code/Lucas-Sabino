//Exercícios de interpretação de código
/*
1. será impresso no console todos os valores contidos em usuarios
2. Serão impressos apenas os nomes de todos os arrays.
3. tudo onde o apelido for diferente de "Chijo"
*/

//Exercícios de escrita de código
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a.
const nome = pets.map(pets => pets.nome)
console.log(nome)
//b.
const petSalsicha = pets.filter(pets => pets.raca === "Salsicha")
console.log(petSalsicha)
//c.
const filtroPoodle = pets.filter(pets => pets.raca === "Poodle")
const petPoodle = filtroPoodle.map(pet => console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`)) 

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a.
 const nomeDosItens = produtos.map(produtos => produtos.nome)
 console.log(nomeDosItens)
//b.
 const nomeEPreco = produtos.map((item, index, array) => {
    const novaTabelaComDesconto = {nome: item.nome, preco: item.preco-(item.preco*(5/100))}
    return novaTabelaComDesconto
 })
console.log(nomeEPreco)
//c.
const apenasBebidas = produtos.filter(produtos=>produtos.categoria === "Bebidas")
console.log(apenasBebidas)
//d.
const contemYpe = produtos.filter(produtos => produtos.nome.includes('Ypê'))
console.log(contemYpe)
//e
const ypeComFrase = contemYpe.map(contemYpe => `Compre ${contemYpe.nome} por ${contemYpe.preco}`)
console.log(ypeComFrase)


//Desafios
//1.
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
//a.
const pokemonsOrdenados = pokemons.map(pokemons => pokemons.nome)
pokemonsOrdenados.sort()
console.log(pokemonsOrdenados)
//b.
// let tipoNaoRepetido = pokemons.filter((pokemons, index, array) => index === array.indexOf(pokemons))
// tipoNaoRepetido = pokemons.map(tipoNaoRepetido => tipoNaoRepetido.tipo)
const tiposPokemons = pokemons.map(pokemons => pokemons.tipo)
function tipoNaoRepetido (array){
    return array.filter((value, index) => array.indexOf(value) === index)
}
console.log(tipoNaoRepetido(tiposPokemons))