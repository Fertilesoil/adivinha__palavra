import { dica, palavra } from "../../main"
import { observaTeclado } from "./EventoTeclado"
import { caixaLetra, comeco, contador, definicao, divJogo, divLetras, mensagem, mensagemFinal, palavraContainer, resultado, startBtn } from "./Frequentes"
import { gerarLetras } from "./Letras"
import { exporPalavras } from "./Palavra"
import { esconder, mostrar } from "./mostradores"

let vitoria = 0, derrota = 5


export const observaClick = (letra) => {
 letra.onclick = () => {
  mensagem.innerText = 'Letra Correta!'
  mensagem.style.color = '#FCF5ED'
  mensagem.style.textShadow = `1px 1px 5px #07b000`

  const caractere = palavra.toUpperCase().split('')

  condicional(caractere, letra)
 }
}

export const condicional = (caractere, letra) => {
 if (caractere.includes(letra.innerText)) {
  caractere.forEach((char, index) => {
   if (char === letra.innerText) {
    letra.classList.remove('letras__btn')
    letra.classList.add('letra__aceita')
    caixaLetra[index].innerText = char
    vitoria++

    if (vitoria === caractere.length) {
     mensagemFinal.innerHTML = 'Você venceu!'
     acabarJogo()
    }
   }
  })
 } else {
  letra.classList.remove('letras__btn')
  letra.classList.add('letra__negada')
  letra.setAttribute('disabled', 'true')
  derrota--

  contador.innerHTML = `
  <span class="chances">Chances Restantes:</span> ${derrota}
  `

  mensagem.innerText = `Letra Incorreta`
  mensagem.style.color = '#FCF5ED'
  mensagem.style.textShadow = `1px 1px 3px crimson`

  if (derrota === 0) {
   resultado.innerHTML = `
   A palavra era: <span> ${palavra} </span>
   `

   mensagemFinal.style.textShadow = `1px 1px 9px crimson`
   mensagemFinal.innerHTML = 'Game Over'
   startBtn.innerText = 'Recomeçar'
   acabarJogo()
  }
 }
}

export const iniciar = () => {
 vitoria = 0
 derrota = 5
 palavraContainer.innerHTML = ''
 definicao.textContent = ''
 mensagem.textContent = ''
 divLetras.innerHTML = ''
 resultado.innerHTML = ''
 contador.innerHTML = `
 <span class="chances">Tentativas:</span> ${derrota}
 `

 exporPalavras(palavra, dica)
 gerarLetras()
}

export const acabarJogo = () => {
 esconder(divJogo)
 mostrar(comeco)
}

export const clickComeco = () => {
 startBtn.addEventListener('click', () => {
  esconder(comeco);
  mostrar(divJogo);
  observaTeclado()
  iniciar();
 })
}