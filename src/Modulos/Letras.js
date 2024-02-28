import { divLetras } from "./Frequentes";
import { observaClick } from "./escutadores";

export function gerarLetras() {
 for (let i = 65; i < 91; i++) {
  let letra = document.createElement('button');
  letra.classList.add('letras__btn')

  letra.innerText = String.fromCharCode(i);
  divLetras.appendChild(letra);

  observaClick(letra)
 }
}

