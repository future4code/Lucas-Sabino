// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  altura = Number(prompt('Altura do triangulo'))
  largura = Number(prompt('largura do triangulo'))
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  anoAtual = Number(prompt('Ano atual'))
  anoNascimento = Number(prompt('Ano de nascimento'))
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return (peso / (altura * altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt('Seu nome')
  idade = prompt('sua idade')
  email = prompt('Seu email')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  cor1 = prompt('Primeira cor favorita')
  cor2 = prompt('Segunda cor favorita')
  cor3 = prompt('Terceira cor favorita')
  console.log([cor1,cor2,cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return (string1.length === string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const vari = array[0] //[1, 2, 3, 4, 5] -> vari = 1
  array[0] = array[array.length -1] // 1 = 5 -> [5, 2, 3, 4, 5]
  array[array.length -1] = vari // 5 = 1 -> [5, 2, 3, 4, 1]
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return (string1.toLowerCase() === string2.toLowerCase())
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Ano atual'))
  const anoNascimento = Number(prompt('Ano de nascimento'))
  const anoCarteira = Number(prompt('Ano de emissão da carteira'))
  const idade = anoAtual - anoNascimento
  let renovacao = anoAtual - anoCarteira  
  
  const cond1 = (idade <= 20 && renovacao >=5)
  const cond2 = ((idade > 20 && idade <= 50) && renovacao >= 10)
  const cond3 = (idade > 50 && renovacao >= 15)

  console.log(cond1 || cond2 || cond3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  anoBissexto = ano % 400 === 0
  anoBissexto2 = ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)
  return (anoBissexto || anoBissexto2)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt('Você tem mais de 18 anos?')
  const escolaridade = prompt('Você possui ensino médio completo?')
  const disponivel = prompt('Possui disponibilidade?')

  const teste = idade.toUpperCase() === 'SIM' && 
                escolaridade.toUpperCase() === 'SIM' &&
                disponivel.toUpperCase() === 'SIM'
  console.log(teste)
}