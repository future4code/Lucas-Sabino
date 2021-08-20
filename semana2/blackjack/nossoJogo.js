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
console.log("Boas vindas ao jogo do Blackjack! \nQue os jogos comecem!")
function somarCartas (carta1, carta2){
   let soma = carta1.valor + carta2.valor
   return soma
}
if(confirm('Tem certeza de que quer começar uma nova rodada?')){
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
   const cartasUsuarioSomadas = somarCartas(cartaUsuario1, cartaUsuario2)
   const cartasComputadorSomadas = somarCartas(cartaComputador1, cartaComputador2)
   console.log(`Usuário - Cartas ${cartaUsuario1.texto} ${cartaUsuario2.texto} - Pontuação ${cartasUsuarioSomadas}`)
   console.log(`Computador - Cartas ${cartaComputador1.texto} ${cartaComputador2.texto} - Pontuação ${cartasComputadorSomadas}`)  
   if(cartasUsuarioSomadas > cartasComputadorSomadas){
      console.log('O usuário ganhou')
   } else if(cartasUsuarioSomadas < cartasComputadorSomadas){
      console.log('O computador ganhou')
   } else {
      console.log('Empate!')
   }
} else {
   console.log("Game Over!")
}