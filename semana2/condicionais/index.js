//Exercício de interpretação de código
/*1.a. O código testa se o numero digitado pelo usuário é divisível por 2 (ou se é par)
    b. Apenas para números pares, ou divisíveis por 2
    c. Para os demais números (ímpares ou não divisíveis por 2)

  2.a. O usuário escolhe uma fruta e é retornado o preço da mesma.
    b. O preço da fruta, Maçã é R$ 2.25
    c. O preço da fruta, Pêra é R$ 5

  3.a. Armazenando um número digitado pelo usuário.
    b. "Esse número passou no teste" / se o número for -10 não será impresso nada.
    c. Haverá um erro no ultimo console.log pois ele não consegue acessar a variável mensagem, que está dentro da condição if.  
    */ 

//Exercício de escrita de código
//1.
const idade = Number(prompt('Qual a sua idade?'))

if (idade > 18){
    console.log('Pode dirigir')
} else {
    console.log('Não pode dirigir')
}

//2.
const turno = prompt('Qual o turno você estuda? M (Matutino)\nV (Vespertino)\nN (Noturno)').toUpperCase()
if(turno === 'M'){
    console.log('Bom Dia!')
} else if (turno === 'V'){
    console.log('Boa Tarde!')
} else if (turno === 'N'){
    console.log('Boa Noite!')
} else{
    console.log('Digite uma opção válida')
}

//3.
//const turno = prompt('Qual o turno você estuda? M (Matutino)\nV (Vespertino)\nN (Noturno)').toUpperCase()
switch (turno){
    case 'M':
        console.log('Bom Dia!')
        break
    case 'V':
        console.log('Boa Tarde!')
        break
    case 'N':
        console.log('Boa Noite!')
        break
    default:
        console.log('Digite uma resposta válida')
}

//4.
const genero = prompt('Qual o gênero do filme?').toLowerCase()
const preco = Number(prompt('Qual o preço do ingresso?'))

if(genero === 'fantasia' && preco < 15){
    console.log('Bom filme!')
} else {
    console.log('Escola outro filme :(')
}

//Desafios
//1.
const generoDesafio = prompt('Qual o gênero do filme?').toLowerCase()
const precoDesafio = Number(prompt('Qual o preço do ingresso?'))

if(generoDesafio === 'fantasia' && precoDesafio < 15){
    const snack = prompt('Qual lanchinho você vai comprar?')
    console.log(`Bom filme! Aproveite o seu ${snack}`)
} else {
    console.log('Escola outro filme :(')
}

//2.
const nomeUsuario = prompt('Qual o seu nome?')
const tipoJogo = prompt('Qual o tipo do jogo? IN (internacional) / DO (doméstico)').toUpperCase()
const etapaJogo = prompt('Qual a etapa do jogo? \nSF (semi-final) \nDT (decisão terceiro lugar) \nFI (final)').toUpperCase()
const categoria = Number(prompt('Qual a categoria? (1,2,3 ou 4)'))
const quantidadeIngresso = Number(prompt('Quantos ingressos?'))
const valores = {
    valoresSf: [1320, 880, 550, 220],
    valoresDt: [660, 440, 330, 170],
    valoresFi: [1980, 1320, 880, 330]
}
const dolar = 4.10

function imprimir(funcTipoJogo){
    console.log(`Nome do cliente: ${nomeUsuario}`)
    if(tipoJogo === 'DO') {
        console.log('Tipo do jogo: Nacional')
        if (etapaJogo === 'SF') {
            console.log('Etapa do jogo: Semi-final')
            switch (categoria) {
                case 1:
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \n Valor do ingresso: R$${valores.valoresSf[0]} \nValor total: R$${valores.valoresSf[0] * quantidadeIngresso}`)
                    break
                case 2: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: R$${valores.valoresSf[1]} \nValor total: R$${valores.valoresSf[1] * quantidadeIngresso}`)
                    break
                case 3: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: R$${valores.valoresSf[2]} \nValor total: R$${valores.valoresSf[2] * quantidadeIngresso}`)
                    break
                case 4: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: R$${valores.valoresSf[3]} \nValor total: R$${valores.valoresSf[3] * quantidadeIngresso}`)
                    break
            }
        } else if (etapaJogo === 'DT'){
            console.log('Etapa do Jogo: Decisão terceiro lugar')
            switch (categoria) {
                case 1:
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: R$${valores.valoresDt[0]} \nValor total: R$${valores.valoresDt[0] * quantidadeIngresso}`)
                    break
                case 2: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: R$${valores.valoresDt[1]} \nValor total: R$${valores.valoresDt[1] * quantidadeIngresso}`)
                    break
                case 3: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: R$${valores.valoresDt[2]} \nValor total: R$${valores.valoresDt[2] * quantidadeIngresso}`)
                    break
                case 4: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: R$${valores.valoresDt[3]} \nValor total: R$${valores.valoresDt[3] * quantidadeIngresso}`)
                    break
            }
        } else if (etapaJogo === 'FI'){
            console.log('Etapa do jogo: Final')
            switch (categoria) {
                case 1:
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: R$${valores.valoresFi[0]} \nValor total: R$${valores.valoresFi[0] * quantidadeIngresso}`)
                    break
                case 2: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: R$${valores.valoresFi[1]} \nValor total: R$${valores.valoresFi[1] * quantidadeIngresso}`)
                    break
                case 3: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: R$${valores.valoresFi[2]} \nValor total: R$${valores.valoresFi[2] * quantidadeIngresso}`)
                    break
                case 4: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: R$${valores.valoresFi[3]} \nValor total: R$${valores.valoresFi[3] * quantidadeIngresso}`)
                    break
            }
        }
    } else if (tipoJogo === 'IN'){
        console.log('Tipo do jogo: Internacional')
        if (etapaJogo === 'SF') {
            console.log('Etapa do jogo: Semi-final')
            switch (categoria) {
                case 1:
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresSf[0] / dolar} \nValor total: U$${(valores.valoresSf[0] * quantidadeIngresso)/ dolar}`)
                    break
                case 2: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresSf[1] / dolar} \nValor total: U$${(valores.valoresSf[1] * quantidadeIngresso) / dolar}`)
                    break
                case 3: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresSf[2] / dolar} \nValor total: U$${(valores.valoresSf[2] * quantidadeIngresso) / dolar}`)
                    break
                case 4: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresSf[3] / dolar} \nValor total: U$${(valores.valoresSf[3] * quantidadeIngresso) / dolar}`)
                    break
            }
        } else if (etapaJogo === 'DT'){
            console.log('Etapa do Jogo: Decisão terceiro lugar')
            switch (categoria) {
                case 1:
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresDt[0] / dolar} \nValor total: U$${(valores.valoresDt[0] * quantidadeIngresso) / dolar}`)
                    break
                case 2: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresDt[1] / dolar} \nValor total: U$${(valores.valoresDt[1] * quantidadeIngresso) / dolar}`)
                    break
                case 3: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresDt[2] / dolar} \nValor total: U$${(valores.valoresDt[2] * quantidadeIngresso) / dolar}`)
                    break
                case 4: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresDt[3] / dolar} \nValor total: U$${(valores.valoresDt[3] * quantidadeIngresso) / dolar}`)
                    break
            }
        } else if (etapaJogo === 'FI'){
            console.log('Etapa do jogo: Final')
            switch (categoria) {
                case 1:
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresFi[0] / dolar} \nValor total: U$${(valores.valoresFi[0] * quantidadeIngresso) / dolar}`)
                    break
                case 2: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresFi[1] / dolar} \nValor total: U$${(valores.valoresFi[1] * quantidadeIngresso) / dolar}`)
                    break
                case 3: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresFi[2] / dolar} \nValor total: U$${(valores.valoresFi[2] * quantidadeIngresso) / dolar}`)
                    break
                case 4: 
                    console.log(`Categoria: ${categoria} \nQuantidade de ingressos: ${quantidadeIngresso} ingressos \nValor do ingresso: U$${valores.valoresFi[3] / dolar} \nValor total: U$${(valores.valoresFi[3] * quantidadeIngresso) / dolar}`)
                    break
            }
        }
    }
    
}
imprimir(tipoJogo)