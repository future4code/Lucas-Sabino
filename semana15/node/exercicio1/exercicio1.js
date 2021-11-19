// a) process.argv[] (CONFIA)

const nome = process.argv[2]
const idade = Number(process.argv[3])

if(nome === undefined || idade === NaN){
    console.log('\x1b[36m%s\x1b[0m','Esperava 2 parâmetros, só recebi um')
} else{
    console.log('\x1b[36m%s\x1b[0m',`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade +7}`)
}