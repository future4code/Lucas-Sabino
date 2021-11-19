//a) Ocorre um erro de compilação pois a variável tem um tipo fixo que não corresponde a number
//b) O mesmo erro da questão anterior. para resolver basta usar o "pipe (|)" como tipo string
//c)
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

enum Cores{
    VERMELHO = "Vermelho",
    LARANJA = 'Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    ANIL = 'Anil',
    VIOLETA = 'Violeta'
}

const people0: {nome: string, idade: number, corFavorita: Cores} ={
    nome: 'lucas',
    idade: 18,
    corFavorita: Cores.ANIL
}

const people1: Pessoa = {
    nome: 'sarah',
    idade: 24,
    corFavorita: Cores.VIOLETA
}

const people2: Pessoa = {
    nome: 'murilo',
    idade: 60,
    corFavorita: Cores.LARANJA
}

const people3: Pessoa = {
    nome: 'leozitos',
    idade: 25,
    corFavorita: Cores.VERDE
}


//d)
