import { palavra } from "../../main";
import { comeco, divJogo } from "./Frequentes";
import { acabarJogo, condicional, iniciar } from "./escutadores";
import { esconder, mostrar } from "./mostradores";

export function observaTeclado() {
 window.addEventListener('keypress', (e) => {
  let btn = [...document.querySelectorAll('.letras__btn')]

  const achar = btn.find(botao => botao.textContent.toLowerCase() === e.key)

  const caractere = palavra.toUpperCase().split('')

  condicional(caractere, achar)
 })
}

export const apoio = () => {
 window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
   esconder(comeco);
   mostrar(divJogo);
   observaTeclado()
   iniciar();
  }

  if (e.key === 'Escape') {
   acabarJogo()
  }
 })
}