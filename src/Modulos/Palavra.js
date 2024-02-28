import { palavras } from "../Db";
import { definicao, palavraContainer } from "./Frequentes";

function numeroAleatorio(array) {
  return Math.floor(Math.random() * array.length)
}

export function gerarPalavra() {
  // let palavrasUsadas = []
  // let palavra = palavras[numeroAleatorio(palavras)];
  // let palavraAchada = palavrasUsadas.find() 

  // if (!palavrasUsadas.contains(palavra)) {
    
  // }

  return palavras[numeroAleatorio(palavras)];
}

export const exporPalavras = (palavra, dica) => {
  let letras = ''
  palavra.split('').forEach(valor => {
    letras += `<span class="caixa__letra"></span>`
  })

  palavraContainer.innerHTML = letras
  definicao.textContent = dica
}