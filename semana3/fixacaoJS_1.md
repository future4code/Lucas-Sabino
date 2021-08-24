```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salario = 2000
  let comissao = valorTotalVendas * 0.05
  salario = salario + (qtdeCarrosVendidos * 100) + comissao
  return salario
} ```