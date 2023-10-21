const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()



function gerarNumeroSAleatorio(){
    return parseInt(Math.random() *maiorValor + 1)
}
console.log('Número Secreto:',numeroSecreto)

const elementoMenorValor = document.getElementById('menor-Valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-Valor')
elementoMaiorValor.innerHTML = maiorValor


