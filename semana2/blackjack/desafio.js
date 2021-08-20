/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log('Bem vindo ao jodo de Blackjack!!')

let cartaUsuario = []
let cartasComputador = []
let i = 2
function somaDasCartas() {
      cartaUsuario.push(comprarCarta())
      somaCartasUsuario = somaCartasUsuario + cartaUsuario[i].valor
      return somaCartasUsuario
}

if(confirm('Deseja começar o jogo?')){
   cartaUsuario.push(comprarCarta())
   cartaUsuario.push(comprarCarta())
   if(cartaUsuario[0].texto.includes('A') && cartaUsuario[1].texto.includes('A')){
      console.log(`Você tirou dois 'A's, tente novamente.`) 
   } else {
      somaCartasUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor
      cartasComputador.push(comprarCarta())
      cartasComputador.push(comprarCarta())
      somaCartasComputador = cartasComputador[0].valor + cartasComputador[1].valor
         while(confirm(`Suas cartas são ${cartaUsuario.map(cartaUsuario => cartaUsuario.texto)}. A carta revelada do computador é ${cartasComputador[0].texto} \nDeseja comprar mais uma carta?`) && somaCartasUsuario < 21){   
               somaDasCartas()
         }
            alert(`Suas cartas são ${cartaUsuario.map(cartaUsuario => cartaUsuario.texto)}. Sua pontuação é ${somaCartasUsuario}. \nAs cartas do computador são ${cartasComputador.map(cartasComputador => cartasComputador.texto)}. A pontuação do computador é ${somaCartasComputador}`)
         }
         if(somaCartasUsuario > somaCartasComputador && somaCartasUsuario <= 21){
            console.log("O usuário venceu !!")
         } else if (somaCartasUsuario < somaCartasComputador || somaCartasUsuario >21){
            console.log("O computador ganhou!")
         } else {
            console.log('Empate!')
         }
      }
   else {
   console.log('Game Over')
}