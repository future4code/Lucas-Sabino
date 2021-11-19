//a) Entradas: numeros / Saídas: estatisticas (maior, menor, media)
type amostraDeIdades = {
    numeros: [21, 43, 34, 46, 87, 12],
}
    function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort((a: number, b: number) => a - b)
        
    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas)